import { Platform } from "react-native";
import { Tabs, router } from "expo-router";
import { Header } from "@/componets/layout";
import { Text } from "@/componets/common";
import { Logo } from "@/componets/icons";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TabLayout = () => {
  const colorScheme = useTheme();

  const commonOptions = {
    headerShadowVisible: false,
    tabBarActiveTintColor: colorScheme.colors.text,
    tabBarInactiveTintColor: colorScheme.colors.card,
    tabBarStyle: {
      backgroundColor: colorScheme.colors.background,
      borderTopWidth: 1,
      borderTopColor: colorScheme.colors.border,
      paddingTop: Platform.OS === "ios" ? 4 : 2,
    },
    tabBarShowLabel: false,
  };

  return (
    <Tabs screenOptions={commonOptions}>
      <Tabs.Screen
        name="index"
        options={{
          header: () => (
            <Header
              left={<Logo fill={colorScheme.colors.primary} />}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colorScheme.colors.border,
              }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          header: () => (
            <Header
              left={
                <TouchableOpacity hitSlop={6} onPress={() => router.back()}>
                  <Ionicons
                    name="close-outline"
                    size={32}
                    color={colorScheme.colors.text}
                  />
                </TouchableOpacity>
              }
              right={
                <TouchableOpacity hitSlop={8} onPress={() => router.back()}>
                  <Text variant="subheading" weight="semiBold">
                    공유
                  </Text>
                </TouchableOpacity>
              }
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colorScheme.colors.border,
              }}
            />
          ),
          tabBarStyle: { display: "none" },
          tabBarIconStyle: { marginTop: 2 },
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
