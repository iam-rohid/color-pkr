import { colord, HsvaColor } from "colord";
import React, { useEffect, useState } from "react";
import ColorSlider from "./ColorSlider";

const HSVAPicker = ({
  value,
  setValue,
}: {
  value: HsvaColor;
  setValue: (value: HsvaColor) => void;
}) => {
  const [hsva, setHsva] = useState(value);
  useEffect(() => {
    setValue(hsva);
  }, [hsva]);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <ColorSlider
        value={hsva.h}
        onChange={(h) =>
          setHsva({
            ...hsva,
            h,
          })
        }
        maxValue={360}
        style={{
          background: `linear-gradient(to right, rgb(255,0,0),rgb(255,255,0), rgb(0,255,0),rgb(0,255,255), rgb(0,0,255),rgb(255,0,255), rgb(255,0,0))`,
        }}
      />
      <ColorSlider
        value={hsva.s}
        onChange={(s) =>
          setHsva({
            ...hsva,
            s,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsva,
            s: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...hsva,
            s: 100,
            a: 1,
          }).toHex()})`,
        }}
      />
      <ColorSlider
        value={hsva.v}
        onChange={(v) =>
          setHsva({
            ...hsva,
            v,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsva,
            v: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...hsva,
            v: 100,
            a: 1,
          }).toHex()})`,
        }}
      />

      <ColorSlider
        value={hsva.a * 100}
        onChange={(a) =>
          setHsva({
            ...hsva,
            a: a / 100,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsva,
            a: 0,
          }).toHex()}, ${colord({
            ...hsva,
            a: 1,
          }).toHex()})`,
        }}
      />
    </div>
  );
};

export default HSVAPicker;
