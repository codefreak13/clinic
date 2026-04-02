export * from "./colors";
export * from "./typography";
export * from "./dimensions";

import { colors } from "./colors";
import { typography, fontSize } from "./typography";
import {
  spacing,
  borderRadius,
  sizes,
  padding,
  margin,
  gap,
} from "./dimensions";

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  sizes,
  fontSize,
  padding,
  margin,
  gap,
} as const;

export type Theme = typeof theme;
