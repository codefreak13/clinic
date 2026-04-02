import React, { forwardRef } from 'react';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text as RNText, StyleSheet, View, TextStyle } from 'react-native';
import { fontSize, fontWeight, spacing, borderRadius, colors } from '@/theme';

interface InputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  inputStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const TextInput = forwardRef<RNTextInput, InputProps>(
  (
    {
      label,
      error,
      hint,
      variant = 'default',
      size = 'medium',
      inputStyle,
      leftIcon,
      rightIcon,
      style,
      ...props
    },
    ref
  ) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'filled':
          return styles.filled;
        case 'outlined':
          return styles.outlined;
        default:
          return styles.default;
      }
    };

    const getSizeStyles = () => {
      switch (size) {
        case 'small':
          return styles.small;
        case 'large':
          return styles.large;
        default:
          return styles.medium;
      }
    };

    return (
      <View style={styles.wrapper}>
        {label && (
          <RNText style={styles.label}>{label}</RNText>
        )}
        <View style={[styles.inputContainer, getVariantStyles(), error && styles.errorBorder]}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <RNTextInput
            ref={ref}
            style={[styles.input, getSizeStyles(), inputStyle, style]}
            placeholderTextColor={colors.placeholder}
            {...props}
          />
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
        {error && <RNText style={styles.error}>{error}</RNText>}
        {hint && !error && <RNText style={styles.hint}>{hint}</RNText>}
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.text,
    marginBottom: spacing.xsm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
  },
  default: {
    borderWidth: 0,
  },
  filled: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.sm,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: borderRadius.sm,
  },
  errorBorder: {
    borderColor: colors.error,
  },
  input: {
    flex: 1,
    fontSize: fontSize.lg,
    color: colors.text,
    paddingVertical: spacing.md,
  },
  small: {
    paddingVertical: spacing.sm,
    paddingHorizontal: 0,
    fontSize: fontSize.xs,
  },
  medium: {
    paddingVertical: spacing.md,
    paddingHorizontal: 0,
    fontSize: fontSize.lg,
  },
  large: {
    paddingVertical: spacing.lg,
    paddingHorizontal: 0,
    fontSize: fontSize.xl,
  },
  leftIcon: {
    marginLeft: spacing.md,
  },
  rightIcon: {
    marginRight: spacing.md,
  },
  error: {
    fontSize: spacing.sm,
    color: colors.error,
    marginTop: spacing.xs,
  },
  hint: {
    fontSize: spacing.sm,
    color: colors.placeholder,
    marginTop: spacing.xs,
  },
});
