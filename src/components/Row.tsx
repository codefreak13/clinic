import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/TextInput";
import { fontSize, spacing, sizes, colors } from "@/theme";
import { isIOS } from "@/utils/platform";

interface RowProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "phone-pad";
  testID?: string;
  showSeparator?: boolean;
  prefix?: string;
  editable?: boolean;
}

export function Row({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  testID,
  showSeparator = true,
  prefix,
  editable = true,
}: RowProps) {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {prefix && <Text style={styles.prefix}>{prefix}</Text>}
        <TextInput
          testID={testID}
          style={[styles.input, !editable && styles.inputDisabled]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          keyboardType={keyboardType}
          editable={editable}
        />
      </View>
      {showSeparator && <View style={styles.separator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    minHeight: sizes.rowHeight,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: sizes.rowHeight,
    paddingHorizontal: spacing.lg,
  },
  label: {
    fontSize: fontSize.lg,
    color: colors.text,
    width: sizes.labelWidth,
  },
  prefix: {
    fontSize: fontSize.lg,
    color: colors.text,
    marginRight: spacing.xs,
  },
  input: {
    flex: 1,
    fontSize: fontSize.lg,
    color: colors.text,
    textAlign: "right",
    paddingVertical: isIOS ? spacing.md : spacing.sm,
  },
  inputDisabled: {
    color: colors.placeholder,
  },
  separator: {
    height: sizes.separatorHeight,
    backgroundColor: colors.separator,
    marginLeft: spacing.lg,
  },
});
