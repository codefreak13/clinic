import { normalize } from '@/utils/scale';

export const fontSize = {
  xs: normalize(10),
  sm: normalize(12),
  base: normalize(14),
  lg: normalize(17),
  xl: normalize(20),
  xxl: normalize(24),
  heading: normalize(28),
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
} as const;

export const textColor = '#000000';

export const typography = {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const;
