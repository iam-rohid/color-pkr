import { colord, RgbaColor } from "colord";
import React, { useEffect, useState } from "react";
import ColorSlider from "./ColorSlider";

const RGBAPicker = ({
  value,
  setValue,
}: {
  value: RgbaColor;
  setValue: (value: RgbaColor) => void;
}) => {
  const [rgba, setRgba] = useState(value);
  useEffect(() => {
    setValue(rgba);
  }, [rgba]);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <ColorSlider
        value={rgba.r}
        onChange={(r) =>
          setRgba({
            ...rgba,
            r,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...rgba,
            r: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...rgba,
            r: 255,
            a: 1,
          }).toHex()})`,
        }}
      />
      <ColorSlider
        value={rgba.g}
        onChange={(g) =>
          setRgba({
            ...rgba,
            g,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...rgba,
            g: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...rgba,
            g: 255,
            a: 1,
          }).toHex()})`,
        }}
      />
      <ColorSlider
        value={rgba.b}
        onChange={(b) =>
          setRgba({
            ...rgba,
            b,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...rgba,
            b: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...rgba,
            b: 255,
            a: 1,
          }).toHex()})`,
        }}
      />

      <ColorSlider
        value={rgba.a * 100}
        onChange={(a) =>
          setRgba({
            ...rgba,
            a: a / 100,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...rgba,
            a: 0,
          }).toHex()}, ${colord({
            ...rgba,
            a: 1,
          }).toHex()})`,
        }}
      />
    </div>
  );
};

export default RGBAPicker;
