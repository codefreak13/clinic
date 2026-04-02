import React from "react";
import { View, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import {
  Card,
  Screen,
  SectionHeader,
  Separator,
  Text,
  TextInput,
  VerticalSeparator,
} from "@/components";
import { useSettings } from "./useSettings";
import { fontSize, spacing, sizes, colors } from "@/theme";

export default function SettingsScreen() {
  const { form } = useSettings();
  const { control } = form;

  return (
    <Screen contentContainerStyle={styles.scrollContent}>
      <SectionHeader title="Clinic Info" />
      <Card>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Clinic name</Text>
          <Controller
            control={control}
            name="clinicName"
            render={({ field: { onChange, value } }) => (
              <TextInput
                testID="clinic-name-input"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Enter clinic name"
                placeholderTextColor={colors.placeholder}
              />
            )}
          />
        </View>
        <Separator />
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneContainer}>
            <Text style={styles.phonePrefix}>+48</Text>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  testID="phone-input"
                  style={styles.phoneInput}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter phone number"
                  placeholderTextColor={colors.placeholder}
                  keyboardType="phone-pad"
                />
              )}
            />
          </View>
        </View>
      </Card>

      <View style={styles.sectionGap} />
      <SectionHeader title="Address" />
      <Card>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Street</Text>
          <Controller
            control={control}
            name="street"
            render={({ field: { onChange, value } }) => (
              <TextInput
                testID="street-input"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Enter street"
                placeholderTextColor={colors.placeholder}
              />
            )}
          />
        </View>
        <Separator />
        <View style={styles.twoColumnContainer}>
          <View style={styles.columnItem}>
            <Text style={styles.columnLabel}>Building no.</Text>
            <Controller
              control={control}
              name="buildingNumber"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  testID="building-number-input"
                  style={styles.columnInput}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter"
                  placeholderTextColor={colors.placeholder}
                />
              )}
            />
          </View>
          <VerticalSeparator />
          <View style={styles.columnItem}>
            <Text style={styles.columnLabel}>Apartment no.</Text>
            <Controller
              control={control}
              name="apartmentNumber"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  testID="apartment-number-input"
                  style={styles.columnInput}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter"
                  placeholderTextColor={colors.placeholder}
                />
              )}
            />
          </View>
        </View>
        <Separator />
        <View style={styles.twoColumnContainer}>
          <View style={styles.columnItem}>
            <Text style={styles.columnLabel}>Postal code</Text>
            <Controller
              control={control}
              name="postalCode"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  testID="postal-code-input"
                  style={styles.columnInput}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter"
                  placeholderTextColor={colors.placeholder}
                />
              )}
            />
          </View>
          <VerticalSeparator />
          <View style={styles.columnItem}>
            <Text style={styles.columnLabel}>City</Text>
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  testID="city-input"
                  style={styles.columnInput}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter"
                  placeholderTextColor={colors.placeholder}
                />
              )}
            />
          </View>
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
  sectionGap: {
    height: spacing.xl,
  },
  rowContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  label: {
    fontSize: fontSize.lg,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  input: {
    fontSize: fontSize.lg,
    color: colors.text,
    paddingVertical: spacing.sm,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  phonePrefix: {
    fontSize: fontSize.lg,
    color: colors.text,
    marginRight: spacing.xs,
  },
  phoneInput: {
    flex: 1,
    fontSize: fontSize.lg,
    color: colors.text,
    paddingVertical: spacing.sm,
  },
  twoColumnContainer: {
    flexDirection: "row",
    minHeight: sizes.twoColumnRowHeight,
  },
  columnItem: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  columnLabel: {
    fontSize: fontSize.lg,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  columnInput: {
    fontSize: fontSize.lg,
    color: colors.text,
    paddingVertical: spacing.xs,
  },
});
