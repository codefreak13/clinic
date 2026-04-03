import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fontSize, typography, theme } from "@/theme";
import { SystemBars } from "react-native-edge-to-edge";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SystemBars style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          headerTitleAlign: "center",
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontSize: fontSize.lg,
            fontWeight: typography.fontWeight.semibold,
            color: theme.colors.text,
          },
          headerShadowVisible: false,
          headerBackTitle: "Back",
        }}
      />
    </SafeAreaProvider>
  );
}
