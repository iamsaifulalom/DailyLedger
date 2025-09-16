import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <Stack >
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "slide_from_right" }} />
        <Stack.Screen name="index" options={{ headerShown: false, animation: "slide_from_right" }} />
        <Stack.Screen name="user/[id]" options={{ headerShown: false, animation: "slide_from_right" }} />
      </Stack>
    </SafeAreaView>
  );
}
