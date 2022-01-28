import type {
  CmykaColor,
  RgbaColor,
  HslaColor,
  HwbaColor,
  LabaColor,
  LchaColor,
  XyzaColor,
  HsvaColor,
} from "colord/types";

export interface IColorDetails {
  name: string;
  hex: string;
  rgb: RgbaColor;
  cmyk: CmykaColor;
  hsl: HslaColor;
  hsv: HsvaColor;
  hwb: HwbaColor;
  lab: LabaColor;
  lch: LchaColor;
  xyz: XyzaColor;

  inverted: string;
  shades: string[];
  tones: string[];
  tints: string[];
  tailwindcss: string[];
  hues: string[];
  isLight: boolean;
  isDark: boolean;
  luminance: number;
  brightness: number;
  harmonies: {
    analogous: string[];
    complementary: string[];
    doubleSplitComplementary: string[];
    rectangle: string[];
    splitComplementary: string[];
    tetradic: string[];
    triadic: string[];
  };
}
