import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname, useSegments } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, View, StyleSheet, StatusBar } from "react-native";

const Header = () => {
  const top = useSafeAreaInsets().top;
  const theme = useTheme();
  //   const pathname = usePathname();
  //   const segments = useSegments();

  return (
    <View
      style={{
        paddingTop: top,
        height:
          Platform.OS === "android"
            ? 56 + (StatusBar.currentHeight || 0)
            : 44 + top,
        ...styles.container,
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        hitSlop={8}
        style={styles.leftButtonContainer}
      >
        <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  leftButtonContainer: {
    marginLeft: -5,
  },
});
