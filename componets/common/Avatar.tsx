import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "@/componets/common";
import { AvatarProps } from "@/types";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { palette } from "@/styles/theme";

const Avatar = ({
  source,
  size = 48,
  style,
  isIcon = false,
  onPress,
}: AvatarProps) => {
  const colorScheme = useTheme();

  return (
    <View>
      <Image
        source={source}
        width={size}
        height={size}
        style={[
          {
            borderRadius: size / 2,
            borderWidth: 1,
            borderColor: colorScheme.colors.border,
          },
          style,
        ]}
      />
      {isIcon && (
        <TouchableOpacity
          style={[
            { backgroundColor: colorScheme.colors.background },
            styles.addButton,
          ]}
          hitSlop={8}
          onPress={onPress}
        >
          <Ionicons name="add-circle" size={24} color={palette.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 24,
    width: 24,
    height: 24,
  },
});
