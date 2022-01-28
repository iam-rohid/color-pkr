import React from "react";
import CopyIcon from "./icons/CopyIcon";

const ColorPropertyRow = ({
  name,
  value,
  copyOnClick,
}: {
  name: string;
  value: string;
  copyOnClick?: boolean;
}) => {
  const copy = () => {
    if (copyOnClick) {
      window.navigator.clipboard.writeText(value);
    }
  };
  return (
    <button
      onClick={copy}
      className="w-full h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-between px-4 group"
    >
      <p className="uppercase">{name}</p>
      <div className="flex items-center justify-center gap-1">
        <CopyIcon className="w-4 h-4 group-hover:opacity-50 opacity-0 transition-all duration-300" />
        <p className="uppercase font-medium">{value}</p>
      </div>
    </button>
  );
};

export default ColorPropertyRow;
