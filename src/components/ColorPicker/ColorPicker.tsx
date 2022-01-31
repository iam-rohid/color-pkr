import { Colord, colord } from "colord";
import React, { useState } from "react";
import HSVAPicker from "./HSVAPicker";
import HSLAPicker from "./HSLAPicker";
import RGBAPicker from "./RGBAPicker";
import BOXPicker from "./BOXPicker";

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
  const [pickerOption, setPickerOption] = useState("BOX");
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
            <option value={item} key={item} className="text-gray-900">
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 flex flex-col gap-4">
        {pickerOption === "RGB" ? (
          <RGBAPicker
            value={newColor.toRgb()}
            setValue={(value) => {
              setNewColor(colord(value));
            }}
          />
        ) : pickerOption === "HSL" ? (
          <HSLAPicker
            value={newColor.toHsl()}
            setValue={(value) => {
              setNewColor(colord(value));
            }}
          />
        ) : pickerOption === "HSB" ? (
          <HSVAPicker
            value={newColor.toHsv()}
            setValue={(value) => {
              setNewColor(colord(value));
            }}
          />
        ) : (
          <BOXPicker
            value={newColor.toHsv()}
            setValue={(value) => {
              setNewColor(colord(value));
            }}
          />
        )}
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800">
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
    </div>
  );
};

export default ColorPicker;
