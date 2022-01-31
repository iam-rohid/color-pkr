import { RgbaColor } from "colord";
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
          background: `linear-gradient(to right, rgb(0, ${rgba.g}, ${rgba.b}), rgb(255, ${rgba.g}, ${rgba.b}))`,
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
          background: `linear-gradient(to right, rgba(${rgba.r}, 0, ${rgba.b}),  rgb(${rgba.r}, 255, ${rgba.b}))`,
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
          background: `linear-gradient(to right, rgb(${rgba.r}, ${rgba.g}, 0), rgb(${rgba.r}, ${rgba.g}, 255))`,
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
          background: `linear-gradient(to right, rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0), rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1))`,
        }}
      />
    </div>
  );
};

export default RGBAPicker;
