import React from "react";
import ColorCell from "./ColorCell";

const ColorsRow = ({
  colors,
  title,
  description,
}: {
  colors: string[];
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <p className="font-medium mb-1">{title}</p>
      <div className="w-full flex flex-col sm:flex-row rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        {colors.map((color, i) => (
          <ColorCell color={color} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ColorsRow;
