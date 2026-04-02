import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fontSize, typography, theme } from "@/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
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
