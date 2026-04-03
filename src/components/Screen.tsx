import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "@/theme";
import KeyboardAwareView from "./KeyboardAwareView";

interface ScreenProps {
  children: React.ReactNode;
  disableKeyboardAvoiding?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollable?: boolean;
  keyboardVerticalOffset?: number;
}

export function Screen({
  children,
  disableKeyboardAvoiding = false,
  style,
  contentContainerStyle,
  scrollable = true,
  keyboardVerticalOffset = 0,
}: ScreenProps) {
  const scrollContainerStyle = [styles.scrollContainer, style];
  const staticContainerStyle = [styles.screen, style];

  if (disableKeyboardAvoiding) {
    if (!scrollable) {
      return <View style={staticContainerStyle}>{children}</View>;
    }

    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={scrollContainerStyle}>{children}</View>
      </ScrollView>
    );
  }

  if (!scrollable) {
    return (
      <KeyboardAwareView
        style={styles.screen}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={staticContainerStyle}>{children}</View>
      </KeyboardAwareView>
    );
  }

  return (
    <KeyboardAwareView
      style={styles.screen}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
        scrollEventThrottle={16}
      >
        <View style={scrollContainerStyle}>{children}</View>
      </ScrollView>
    </KeyboardAwareView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
