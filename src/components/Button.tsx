import React from "react";
import {
  TouchableOpacity,
  Text as RNText,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { fontSize, spacing, borderRadius, typography, colors } from "@/theme";

interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  onPress,
  disabled = false,
  title,
  variant = "primary",
  size = "medium",
  style,
  textStyle,
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return { container: styles.secondary, text: styles.secondaryText };
      case "ghost":
        return { container: styles.ghost, text: styles.ghostText };
      default:
        return {
          container: disabled ? styles.primaryDisabled : styles.primaryActive,
          text: styles.primaryText,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return { container: styles.small, text: styles.smallText };
      case "large":
        return { container: styles.large, text: styles.largeText };
      default:
        return { container: styles.medium, text: styles.mediumText };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        styles.container,
        variantStyles.container,
        sizeStyles.container,
        fullWidth && styles.fullWidth,
        style,
      ]}
    >
      <RNText
        style={[
          styles.text,
          variantStyles.text,
          sizeStyles.text,
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {loading ? "Loading..." : title}
      </RNText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  text: {
    fontWeight: typography.fontWeight.semibold,
  },
  primaryActive: {
    backgroundColor: colors.primary,
  },
  primaryDisabled: {
    backgroundColor: colors.disabled,
  },
  primaryText: {
    color: colors.cardBackground,
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryText: {
    color: colors.primary,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  ghostText: {
    color: colors.primary,
  },
  disabledText: {
    opacity: 0.6,
  },
  small: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  smallText: {
    fontSize: spacing.md,
  },
  medium: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  mediumText: {
    fontSize: fontSize.lg,
  },
  large: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
  },
  largeText: {
    fontSize: fontSize.xl,
  },
});
