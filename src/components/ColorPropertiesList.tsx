import React from "react";
import { IColorDetails } from "../types";
import ColorPropertyRow from "./ColorPropertyRow";

const ColorPropertiesList = ({
  colorDetails,
}: {
  colorDetails: IColorDetails;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <ColorPropertyRow copyOnClick name="Name" value={colorDetails.name} />
      <ColorPropertyRow
        copyOnClick
        name="Brightness"
        value={colorDetails.brightness.toString()}
      />
      <ColorPropertyRow
        copyOnClick
        name="Luminance"
        value={colorDetails.luminance.toString()}
      />
      <ColorPropertyRow copyOnClick name="HEX" value={colorDetails.hex} />
      <ColorPropertyRow
        copyOnClick
        name="RGB"
        value={`${colorDetails.rgb.r}, ${colorDetails.rgb.g}, ${colorDetails.rgb.b}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="HSL"
        value={`${colorDetails.hsl.h}, ${colorDetails.hsl.s}, ${colorDetails.hsl.l}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="CMYK"
        value={`${colorDetails.cmyk.c}, ${colorDetails.cmyk.m}, ${colorDetails.cmyk.y}, ${colorDetails.cmyk.k}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="HSV"
        value={`${colorDetails.hsv.h}, ${colorDetails.hsv.s}, ${colorDetails.hsv.v}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="HWB"
        value={`${colorDetails.hwb.h}, ${colorDetails.hwb.w}, ${colorDetails.hwb.b}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="LAB"
        value={`${colorDetails.lab.l}, ${colorDetails.lab.a}, ${colorDetails.lab.b}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="LCH"
        value={`${colorDetails.lch.l}, ${colorDetails.lch.c}, ${colorDetails.lch.h}`}
      />
      <ColorPropertyRow
        copyOnClick
        name="XYZ"
        value={`${colorDetails.xyz.x}, ${colorDetails.xyz.y}, ${colorDetails.xyz.z}`}
      />
    </div>
  );
};

export default ColorPropertiesList;
