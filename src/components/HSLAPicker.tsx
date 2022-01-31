import { HslaColor } from "colord";
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
          background: `linear-gradient(to right, hsl(${hsl.h}, 0%, ${hsl.l}%),  hsl(${hsl.h}, 100%, ${hsl.l}%))`,
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
          background: `linear-gradient(to right, hsl(${hsl.h}, ${hsl.s}%, 0%), hsl(${hsl.h}, ${hsl.s}%, 50%), hsl(${hsl.h}, ${hsl.s}%, 100%))`,
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
          background: `linear-gradient(to right, hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0), hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1))`,
        }}
      />
    </div>
  );
};

export default HSLAPicker;
