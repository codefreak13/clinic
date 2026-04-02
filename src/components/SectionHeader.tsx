import React from "react";
import { Text, StyleSheet } from "react-native";
import { fontSize, spacing, colors } from "@/theme";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return <Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>;
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: fontSize.sm,
    color: colors.sectionHeader,
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },
});
