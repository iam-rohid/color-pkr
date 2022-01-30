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
          ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-transparent"
      } flex items-center justify-start w-full rounded-md`}
    >
      <div className="h-full aspect-square w-14 flex items-center justify-center">
        <Icon className="w-7 h-7" />
      </div>
      {/* <p className="flex-1 text-left hidden lg:block truncate">{name}</p> */}
    </button>
  );
};

export default SideBarItem;
