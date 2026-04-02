import React from 'react';
import { View, StyleSheet } from 'react-native';
import { sizes, colors } from '@/theme';

export function VerticalSeparator() {
  return <View style={styles.verticalSeparator} />;
}

const styles = StyleSheet.create({
  verticalSeparator: {
    width: sizes.separatorHeight,
    backgroundColor: colors.separator,
  },
});
