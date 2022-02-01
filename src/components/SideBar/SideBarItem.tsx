import React, { SVGProps } from "react";

const SideBarItem = ({
  Icon,
  name,
  tag,
  onClick,
  isActive,
}: {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
  tag: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      title={name}
      onClick={onClick}
      className={`${
        isActive
          ? "bg-primary-500 text-white"
          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-transparent dark:hover:bg-gray-700 hover:bg-gray-100"
      } w-full aspect-square flex items-center justify-center rounded-md`}
    >
      <Icon className="w-7 h-7" />
    </button>
  );
};

export default SideBarItem;
