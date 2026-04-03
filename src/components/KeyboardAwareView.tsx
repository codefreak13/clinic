import React, { useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { isIOS } from "@/utils/platform";

interface KeyboardAwareViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardVerticalOffset?: number;
}

const KeyboardAwareView = ({
  children,
  style,
  keyboardVerticalOffset = 0,
}: KeyboardAwareViewProps) => {
  const [keyboardHeight] = useState(new Animated.Value(0));

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={"padding"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <Animated.View
        style={[
          styles.flex,
          style,
          {
            paddingBottom: isIOS ? 0 : Animated.multiply(keyboardHeight, 0.4),
          },
        ]}
      >
        {children}
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginBottom: 100,
  },
});

export default KeyboardAwareView;
