import { normalize } from "@/utils/scale";

export const spacing = {
  xs: normalize(4),
  xsm: normalize(6),
  sm: normalize(8),
  md: normalize(12),
  lg: normalize(16),
  xl: normalize(24),
  xxl: normalize(32),
} as const;

export const borderRadius = {
  xs: normalize(4),
  sm: normalize(8),
  md: normalize(12),
  lg: normalize(16),
  xl: normalize(24),
} as const;

export const sizes = {
  separatorHeight: 0.5,
  iconSmall: normalize(16),
  iconMedium: normalize(24),
  iconLarge: normalize(32),
  rowHeight: normalize(44),
  twoColumnRowHeight: normalize(60),
  labelWidth: 110,
} as const;

export const padding = spacing;
export const margin = spacing;
export const gap = spacing;
