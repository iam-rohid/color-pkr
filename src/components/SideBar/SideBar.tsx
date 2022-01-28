import React, { SVGProps } from "react";
import { useTheme } from "../../hooks/useTheme";
import ColorIcon from "../icons/ColorIcon";
import ColorPaletteIcon from "../icons/ColorPaletteIcon";
import ColorPickerIcon from "../icons/ColorPickerIcon";
import DarkModeIcon from "../icons/DarkModeIcon";
import HistoryIcon from "../icons/HistoryIcon";
import ImageIcon from "../icons/ImageIcon";
import LightModeIcon from "../icons/LightModeIcon";
import MenuIcon from "../icons/MenuIcon";
import SettingsIcon from "../icons/SettingsIcon";
import UserIcon from "../icons/UserIcon";

const SideBar = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <div className="w-14 h-full flex flex-col overflow-y-auto border-r border-gray-100 dark:border-gray-800">
      <SideBarItem Icon={MenuIcon} name="Menu" tag="color-picker" />
      <SideBarItem
        Icon={ColorIcon}
        name="Edit Color"
        tag="edit-color"
        isActive={true}
      />
      <SideBarItem
        Icon={ColorPickerIcon}
        name="Color Picker"
        tag="color-picker"
        isActive={false}
      />
      <SideBarItem
        Icon={ImageIcon}
        name="Color From Image"
        tag="color-from-image"
        isActive={false}
      />
      <SideBarItem
        Icon={ColorPaletteIcon}
        name="Color Palettes"
        tag="color-palettes"
        isActive={false}
      />
      <SideBarItem
        Icon={HistoryIcon}
        name="History"
        tag="history"
        isActive={false}
      />
      <div className="flex-1"></div>
      <SideBarItem
        Icon={darkMode ? DarkModeIcon : LightModeIcon}
        name={darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        tag="dark-mode"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <SideBarItem
        Icon={SettingsIcon}
        name="Settings"
        tag="settings"
        isActive={false}
      />
      <SideBarItem Icon={UserIcon} name="User" tag="user" isActive={false} />
    </div>
  );
};

export default SideBar;

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
      className={`border-l-2 ${
        isActive
          ? "text-primary-500 dark:text-primary-500 border-primary-500"
          : "text-gray-500 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-500 border-transparent"
      } flex items-center justify-center w-full h-14 min-h-[2.5rem]`}
    >
      <Icon className="w-7 h-7" />
    </button>
  );
};
