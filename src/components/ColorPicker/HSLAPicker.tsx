import { colord, HslaColor } from "colord";
import React, { useEffect, useState } from "react";
import ColorSlider from "./ColorSlider";

const HSLAPicker = ({
  value,
  setValue,
}: {
  value: HslaColor;
  setValue: (value: HslaColor) => void;
}) => {
  const [hsl, setHsl] = useState(value);
  useEffect(() => {
    setValue(hsl);
  }, [hsl]);

  return (
    <div className="flex-1 flex flex-col gap-4">
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
        value={hsl.s}
        onChange={(s) =>
          setHsl({
            ...hsl,
            s,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsl,
            s: 0,
            a: 1,
          }).toHex()}, ${colord({
            ...hsl,
            s: 100,
            a: 1,
          }).toHex()})`,
        }}
      />
      <ColorSlider
        value={hsl.l}
        onChange={(l) =>
          setHsl({
            ...hsl,
            l,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, ${colord({
            ...hsl,
            l: 0,
            a: 1,
          }).toHex()},${colord({
            ...hsl,
            l: 50,
            a: 1,
          }).toHex()}, ${colord({
            ...hsl,
            l: 100,
            a: 1,
          }).toHex()})`,
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

export default HSLAPicker;
