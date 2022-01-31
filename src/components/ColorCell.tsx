import { colord } from "colord";
import React from "react";
import { useState } from "react";
const ColorCell = ({ color }: { color: string }) => {
  const textColor = colord(color).isLight() ? "#000" : "#fff";
  const [copied, setCopied] = useState(false);

  const copyHex = () => {
    if (!copied) {
      setCopied(true);
      window.navigator.clipboard.writeText(color);
      setInterval(() => {
        setCopied(false);
      }, 1000);
    }
  };
  return (
    <button
      onClick={copyHex}
      className="flex-1 hover:flex-[2] transition-[flex] duration-300 min-h-[48px] h-14 md:h-16 lg:h-20 relative flex items-center justify-center group"
      style={{
        backgroundColor: color,
        color: textColor ?? "#fff",
      }}
    >
      <div className="w-full h-full absolute inset-0 flex items-center justify-center flex-col sm:opacity-0 hover:opacity-100 transition-all duration-300">
        <p className="absolute uppercase font-medium">
          {copied ? "Copied!" : color}
        </p>
      </div>
    </button>
  );
};

export default ColorCell;
