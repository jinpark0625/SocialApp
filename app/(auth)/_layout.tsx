import { Platform, View } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { Header } from "@/componets/layout";

const AuthLayout = () => {
  const themeColor = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColor.colors.background,
        },
        headerTitle: "",
        headerShadowVisible: false,
        animation: Platform.select({
          ios: "slide_from_right",
          android: "fade",
        }),
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default AuthLayout;
