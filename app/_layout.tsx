import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { X } from "lucide-react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/map"
        options={{
          presentation: "modal",
          headerTransparent: true,
          title: "choose location",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <X size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/add-note"
        options={{
          presentation: "modal",
          headerTransparent: true,
          title: "Add Note",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <X size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/auth"
        options={{
          presentation: "modal",
          headerTransparent: true,
          title: "Sign In/ SignUp",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <X size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
