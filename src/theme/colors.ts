import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1d99cc",
  primaryBright: "#1d99cc",
  primaryDark: "#0098A1",
  secondary: "#1d99cc",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#242012",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#615521",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#1d99cc",
  background: "#303841",
  backgroundDisabled: "#434138",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#514c35",
  primaryDark: "#0098A1",
  tertiary: "#55513f",
  text: "#1d99cc",
  textDisabled: "#767366",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#3a4750",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4b4428 0%, #4b4426 100%)",
  },
};
