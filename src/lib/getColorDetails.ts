import { IColorDetails } from "../types";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import cmykPlugin from "colord/plugins/cmyk";
import hwbPlugin from "colord/plugins/hwb";
import labPlugin from "colord/plugins/lab";
import lchPlugin from "colord/plugins/lch";
import xyzPlugin from "colord/plugins/xyz";
import mixPlugin from "colord/plugins/mix";
import a11yPlugin from "colord/plugins/a11y";
import harmoniesPlugin from "colord/plugins/harmonies";

extend([
  namesPlugin,
  cmykPlugin,
  hwbPlugin,
  lchPlugin,
  labPlugin,
  xyzPlugin,
  mixPlugin,
  a11yPlugin,
  harmoniesPlugin,
]);

const getColorDetails = (
  hex: string,
  shadeCount: number = 11
): IColorDetails => {
  const color = colord(`${hex}`);

  let colorDetails: IColorDetails = {
    name: color.toName({ closest: true }) || "Unknown Color",
    hex: color.toHex(),
    rgb: color.toRgb(),
    cmyk: color.toCmyk(),
    hsl: color.toHsl(),
    hsv: color.toHsv(),
    hwb: color.toHwb(),
    lab: color.toLab(),
    lch: color.toLch(),
    xyz: color.toXyz(),
    inverted: color.invert().toHex(),
    shades: color.shades(shadeCount).map((c) => c.toHex()),
    tones: color.tones(shadeCount).map((c) => c.toHex()),
    tints: color.tints(shadeCount).map((c) => c.toHex()),
    tailwindcss: [
      ...color
        .tints(7)
        .slice(0, 6)
        .reverse()
        .map((c) => c.toHex()),
      ...color
        .shades(6)
        .slice(1, 5)
        .map((c) => c.toHex()),
    ],
    hues: [
      color.hue(color.hue() - 50).toHex(),
      color.hue(color.hue() - 40).toHex(),
      color.hue(color.hue() - 30).toHex(),
      color.hue(color.hue() - 20).toHex(),
      color.hue(color.hue() - 10).toHex(),
      color.hue(color.hue()).toHex(),
      color.hue(color.hue() + 10).toHex(),
      color.hue(color.hue() + 20).toHex(),
      color.hue(color.hue() + 30).toHex(),
      color.hue(color.hue() + 40).toHex(),
      color.hue(color.hue() + 50).toHex(),
    ],
    isDark: color.isDark(),
    isLight: color.isLight(),
    luminance: color.luminance(),
    brightness: color.brightness(),
    harmonies: {
      analogous: color.harmonies("analogous").map((c) => c.toHex()),
      complementary: color.harmonies("complementary").map((c) => c.toHex()),
      doubleSplitComplementary: color
        .harmonies("double-split-complementary")
        .map((c) => c.toHex()),
      rectangle: color.harmonies("rectangle").map((c) => c.toHex()),
      splitComplementary: color
        .harmonies("split-complementary")
        .map((c) => c.toHex()),
      tetradic: color.harmonies("tetradic").map((c) => c.toHex()),
      triadic: color.harmonies("triadic").map((c) => c.toHex()),
    },
  };
  return colorDetails;
};

export default getColorDetails;
