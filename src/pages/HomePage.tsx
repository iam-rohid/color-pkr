import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { IColorDetails } from "../types";
import getColorDetails from "../lib/getColorDetails";
import ColorPropertiesList from "../components/ColorPropertiesList";
import FullscreenIcon from "../components/icons/FullscreenIcon";
import CloseIcon from "../components/icons/CloseIcon";
import ColorHarmonies from "../components/ColorHarmonies";
import ColorVariations from "../components/ColorVariations";
import { Colord, random } from "colord";
import ColorPickerIcon from "../components/icons/ColorPickerIcon";
import ColorPicker from "../components/ColorPicker/ColorPicker";
const HomePage = () => {
  const [color, setColor] = useState<Colord>(random());
  const [colorDetails, setColorDetails] = useState<IColorDetails | null>(null);
  const [fullScreenPreview, setFullScreenPreview] = useState(false);

  const [showColorPicker, setShowColorPicker] = useState(false);
  useEffect(() => {
    setColorDetails(getColorDetails(color.toHex()));
  }, [color]);

  if (!colorDetails) return null;

  return (
    <Container className="flex flex-col gap-10">
      <div
        className="h-40 lg:h-64 w-full flex items-center justify-center flex-col gap-2 relative"
        style={{
          color: colorDetails.isDark ? "#fff" : "#000",
        }}
      >
        <div
          style={{
            backgroundColor: color.toHex(),
          }}
          className={`inset-0 flex items-center justify-center ${
            fullScreenPreview ? "fixed z-50" : "absolute rounded-xl"
          }`}
        >
          <div className="absolute flex items-center justify-center text-center flex-col gap-2">
            <p className="text-lg md:text-xl font-medium opacity-70 uppercase">
              {colorDetails.hex}
            </p>
            <p className="text-2xl md:text-3xl font-black uppercase">
              {colorDetails.name}
            </p>
          </div>
          {fullScreenPreview && (
            <button
              onClick={() => {
                setFullScreenPreview(false);
              }}
              className="w-10 h-10 top-2 right-2 absolute flex items-center justify-center opacity-70 hover:opacity-100"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          )}
        </div>

        <button
          onClick={() => {
            setFullScreenPreview(true);
          }}
          className="w-10 h-10 right-2 bottom-2 absolute flex items-center justify-center"
        >
          <FullscreenIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            setShowColorPicker(true);
          }}
          className="w-10 h-10 right-14 bottom-2 absolute flex items-center justify-center"
        >
          <ColorPickerIcon className="w-6 h-6" />
        </button>
      </div>

      <div>
        <p className="text-xl font-bold pb-2 mb-4 border-b border-gray-100 dark:border-gray-800">
          Color Properties
        </p>
        <ColorPropertiesList colorDetails={colorDetails} />
      </div>
      <div>
        <p className="text-xl font-bold pb-2 mb-2 border-b border-gray-100 dark:border-gray-800">
          Color Variations
        </p>
        <ColorVariations colorDetails={colorDetails} />
      </div>
      <div>
        <p className="text-xl font-bold pb-2 mb-2 border-b border-gray-100 dark:border-gray-800">
          Color Harmonies
        </p>
        <ColorHarmonies colorDetails={colorDetails} />
      </div>

      {showColorPicker && (
        <div className="fixed inset-0 p-4 z">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              setShowColorPicker(false);
            }}
          ></div>
          <div className="p-8 absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <ColorPicker
              color={color}
              setColor={(value) => {
                setColor(value);
              }}
              onClose={() => {
                setShowColorPicker(false);
              }}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
