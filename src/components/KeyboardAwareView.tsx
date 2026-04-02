import { useFocusEffect } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import {
  Keyboard,
  Animated,
  EmitterSubscription,
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
  const keyboardDidShowListener = useRef<EmitterSubscription | null>(null);
  const keyboardDidHideListener = useRef<EmitterSubscription | null>(null);

  useEffect(() => {
    const showEvent = isIOS ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = isIOS ? "keyboardWillHide" : "keyboardDidHide";

    keyboardDidShowListener.current = Keyboard.addListener(
      showEvent,
      (event) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration || 250,
          toValue: event.endCoordinates.height,
          useNativeDriver: false,
        }).start();
      },
    );

    keyboardDidHideListener.current = Keyboard.addListener(
      hideEvent,
      (event) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration || 250,
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
    );

    return () => {
      keyboardDidShowListener.current?.remove();
      keyboardDidHideListener.current?.remove();
    };
  }, [keyboardHeight]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        Keyboard.dismiss();
      };
    }, []),
  );

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={isIOS ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <Animated.View
        style={[
          styles.flex,
          style,
          {
            paddingBottom: Animated.multiply(keyboardHeight, 0.4),
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
  },
});

export default KeyboardAwareView;
