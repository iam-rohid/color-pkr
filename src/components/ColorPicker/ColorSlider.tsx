import React from "react";

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
export default ColorSlider;
