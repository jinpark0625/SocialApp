import { Platform, View, StyleSheet, StatusBar } from "react-native";
import { Text } from "../common";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname, useSegments } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderProps } from "@/types";

const Header = ({ left, right, title, style }: HeaderProps) => {
  const top = useSafeAreaInsets().top;
  const theme = useTheme();
  //   const pathname = usePathname();
  //   const segments = useSegments();

  return (
    <View
      style={[
        {
          paddingTop: top,
          height:
            Platform.OS === "android"
              ? 56 + (StatusBar.currentHeight || 0)
              : 44 + top,
        },
        styles.container,
        style,
      ]}
    >
      <View style={styles.leftButtonContainer}>
        {left !== undefined ? (
          left
        ) : (
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={8}
            style={[styles.leftButtonContainer, styles.buttonWidth]}
          >
            <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        )}
      </View>

      <Text variant="subheading" weight="semiBold">
        {title}
      </Text>

      <View style={styles.buttonWidth}>{right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonWidth: {
    width: 36,
  },
  leftButtonContainer: {
    marginLeft: -5,
  },
});
