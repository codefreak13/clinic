import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { fontSize, spacing, typography, colors } from '@/theme';

type TextVariant = 'heading' | 'subheading' | 'body' | 'caption' | 'label';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  align?: 'left' | 'center' | 'right';
  numberOfLines?: number;
}

export function Text({
  style,
  variant = 'body',
  weight = 'regular',
  color,
  align = 'left',
  numberOfLines,
  children,
  ...props
}: TextProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        styles[weight],
        { color: color || colors.text, textAlign: align },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: fontSize.lg,
    color: colors.text,
  },
  heading: {
    fontSize: fontSize.heading,
    fontWeight: typography.fontWeight.bold,
  },
  subheading: {
    fontSize: fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
  },
  body: {
    fontSize: fontSize.lg,
    fontWeight: typography.fontWeight.regular,
  },
  caption: {
    fontSize: spacing.sm,
    fontWeight: typography.fontWeight.regular,
  },
  label: {
    fontSize: fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },
  regular: {
    fontWeight: typography.fontWeight.regular,
  },
  medium: {
    fontWeight: typography.fontWeight.medium,
  },
  semibold: {
    fontWeight: typography.fontWeight.semibold,
  },
  bold: {
    fontWeight: typography.fontWeight.bold,
  },
});
