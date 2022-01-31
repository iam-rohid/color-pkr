import { colord, HslaColor, HsvaColor } from "colord";
import { off } from "process";
import React, { useEffect, useRef, useState } from "react";
import ColorSlider from "./ColorSlider";

const BOXPicker = ({
  value,
  setValue,
}: {
  value: HsvaColor;
  setValue: (value: HsvaColor) => void;
}) => {
  const [hsl, setHsl] = useState(value);
  useEffect(() => {
    setValue(hsl);
  }, [hsl]);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <ColorBox color={hsl} onChange={setHsl} />
      <ColorSlider
        value={hsl.h}
        onChange={(h) =>
          setHsl({
            ...hsl,
            h,
          })
        }
        maxValue={360}
        style={{
          background: `linear-gradient(to right, rgb(255,0,0),rgb(255,255,0), rgb(0,255,0),rgb(0,255,255), rgb(0,0,255),rgb(255,0,255), rgb(255,0,0))`,
        }}
      />
      <ColorSlider
        value={hsl.a * 100}
        onChange={(a) =>
          setHsl({
            ...hsl,
            a: a / 100,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsl,
            a: 0,
          }).toHex()}, ${colord({
            ...hsl,
            a: 1,
          }).toHex()})`,
        }}
      />
    </div>
  );
};

export default BOXPicker;

const ColorBox = ({
  color,
  onChange,
}: {
  color: HsvaColor;
  onChange: (color: HsvaColor) => void;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const onDrag = (e: MouseEvent) => {
    e.preventDefault();
    if (parentRef.current) {
      let offsetX = e.clientX - parentRef.current.offsetLeft;
      let offsetY = e.clientY - parentRef.current.offsetTop;
      const parentWidth = parentRef.current.clientWidth;
      const parentHeight = parentRef.current.clientHeight;

      offsetX = Math.min(Math.max(offsetX, 0), parentWidth);
      offsetY = Math.min(Math.max(offsetY, 0), parentHeight);
      setOffset({
        x: offsetX,
        y: offsetY,
      });

      const saturation = (offsetX * 100) / parentWidth;
      const brightness = (offsetY * 100) / parentHeight;
      onChange({
        ...color,
        s: saturation,
        v: 100 - brightness,
      });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
    }
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onDrag);
    };
  }, [isDragging]);

  return (
    <div
      className="w-full aspect-video relative overflow-hidden bg-white border border-gray-100 dark:border-gray-700 rounded-xl"
      ref={parentRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        onDrag(e.nativeEvent);
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${colord({
            ...color,
            v: 100,
            s: 0,
            a: 0,
          }).toHex()}, ${colord({
            ...color,
            v: 100,
            s: 100,
            a: 1,
          }).toHex()})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colord({
            ...color,
            v: 100,
            s: 100,
            a: 0,
          }).toHex()}, ${colord({
            ...color,
            v: 0,
            s: 100,
            a: 1,
          }).toHex()})`,
        }}
      ></div>

      <div
        className="w-8 h-8 rounded-full border-4 border-white shadow-md shadow-black/20 absolute -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          left: `${offset.x}px`,
          top: `${offset.y}px`,
        }}
      ></div>
    </div>
  );
};

// 20 -> 80
// 1 - 20/80
// 80 -> (20*80)/80
