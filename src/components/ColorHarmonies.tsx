import React from "react";
import { IColorDetails } from "../types";
import ColorsRow from "./ColorsRow";

const ColorHarmonies = ({ colorDetails }: { colorDetails: IColorDetails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ColorsRow colors={colorDetails.harmonies.analogous} title="Analogous" />
      <ColorsRow
        colors={colorDetails.harmonies.complementary}
        title="Complementary"
      />
      <ColorsRow
        colors={colorDetails.harmonies.doubleSplitComplementary}
        title="Double Split Complementary"
      />
      <ColorsRow colors={colorDetails.harmonies.rectangle} title="Rectangle" />
      <ColorsRow
        colors={colorDetails.harmonies.splitComplementary}
        title="Split Complementary"
      />
      <ColorsRow colors={colorDetails.harmonies.tetradic} title="Tetradic" />
      <ColorsRow colors={colorDetails.harmonies.triadic} title="Triadic" />
    </div>
  );
};

export default ColorHarmonies;
