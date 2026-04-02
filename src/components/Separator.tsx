import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing, sizes, colors } from '@/theme';

export function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: sizes.separatorHeight,
    backgroundColor: colors.separator,
    marginHorizontal: spacing.lg,
  },
});
