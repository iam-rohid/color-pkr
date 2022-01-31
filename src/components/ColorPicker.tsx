import { Colord, colord, RgbaColor } from "colord";
import React, { useState } from "react";

const pickerOptions = ["BOX", "RGB", "HSL", "HSB"];
const ColorPicker = ({
  color,
  setColor,
  onClose,
}: {
  color: Colord;
  setColor: (value: Colord) => void;
  onClose: () => void;
}) => {
  const [pickerOption, setPickerOption] = useState("RGB");
  const [newColor, setNewColor] = useState(color);
  return (
    <div className="rounded-xl w-full max-w-xl flex flex-col pointer-events-auto overflow-hidden">
      <div
        className="flex items-center justify-between p-4"
        style={{
          background: newColor.toHex(),
          color: newColor.isDark() ? "#fff" : "#000",
        }}
      >
        <div>
          <p className="text-2xl uppercase font-bold">
            {newColor.toName({ closest: true })}
          </p>
          <p className="uppercase">{newColor.toHex()}</p>
        </div>
        <select
          value={pickerOption}
          className="px-4 py-2 bg-transparent border-none outline-none cursor-pointer"
          onChange={(e) => {
            setPickerOption(e.target.value);
          }}
        >
          {pickerOptions.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        {pickerOption === "RGB" ? (
          <RGBAPicker
            value={newColor.toRgb()}
            setValue={(rgba) => {
              setNewColor(colord(rgba));
            }}
          />
        ) : null}
      </div>
      <div className="px-4 pb-4 flex items-center gap-2 bg-white dark:bg-gray-800">
        <div className="flex-1"></div>
        <button
          onClick={() => {
            onClose();
          }}
          className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center h-10 px-4 rounded-md"
        >
          Cancel
        </button>
        <button
          className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center h-10 px-4 rounded-md text-white"
          onClick={() => {
            setColor(newColor);
            onClose();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
const RGBAPicker = ({
  value,
  setValue,
}: {
  value: RgbaColor;
  setValue: (value: RgbaColor) => void;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <ColorSlider
        value={value.r}
        onChange={(r) =>
          setValue({
            ...value,
            r,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, rgb(0, ${value.g}, ${value.b}), rgb(255, ${value.g}, ${value.b}))`,
        }}
      />
      <ColorSlider
        value={value.g}
        onChange={(g) =>
          setValue({
            ...value,
            g,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, rgba(${value.r}, 0, ${value.b}),  rgb(${value.r}, 255, ${value.b}))`,
        }}
      />
      <ColorSlider
        value={value.b}
        onChange={(b) =>
          setValue({
            ...value,
            b,
          })
        }
        maxValue={255}
        style={{
          background: `linear-gradient(to right, rgb(${value.r}, ${value.g}, 0), rgb(${value.r}, ${value.g}, 255))`,
        }}
      />

      <ColorSlider
        value={value.a * 100}
        onChange={(a) =>
          setValue({
            ...value,
            a: a / 100,
          })
        }
        maxValue={100}
        style={{
          background: `linear-gradient(to right, rgba(${value.r}, ${value.g}, ${value.b}, 0), rgba(${value.r}, ${value.g}, ${value.b}, 1))`,
        }}
      />
    </div>
  );
};

export default ColorPicker;

const ColorSlider = ({
  value,
  onChange,
  maxValue,
  sliderCN,
  style,
}: {
  value: number;
  onChange: (value: number) => void;
  maxValue: number;
  sliderCN?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="flex items-center h-8 gap-2">
      <div className="flex-1 h-full rounded-full relative">
        <input
          type="range"
          value={value}
          min={0}
          max={maxValue}
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
          className={`color-slider border border-gray-100 dark:border-gray-700 ${sliderCN}`}
          style={style}
        />
      </div>
      <input
        type="text"
        max={maxValue}
        min={0}
        value={value}
        onChange={(e) => {
          let v = e.target.value;
          if (!v) {
            console.log(v);
            v = "0";
          }
          onChange(Math.min(parseInt(v), maxValue));
        }}
        className="bg-transparent h-full pl-4 outline-none border-none focus:bg-gray-100 dark:focus:bg-gray-800 rounded-md w-16 text-center"
      />
    </div>
  );
};
