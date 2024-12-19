import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { palette } from "@/styles/theme";
import { ButtonProps } from "@/types/components";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Button = ({
  title,
  onPress,
  disabled = false,
  style,
  children,
}: ButtonProps) => {
  const isPressed = useSharedValue(0);

  const config = { damping: 10, stiffness: 100 };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(isPressed.value ? 0.96 : 1, config) }],
    backgroundColor: disabled
      ? palette.primaryLight
      : withTiming(isPressed.value ? palette.primaryDark : palette.primary),
  }));

  const handlePressIn = () => {
    isPressed.value = 1;
  };

  const handlePressOut = () => {
    isPressed.value = 0;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.container, animatedStyle, style]}>
        {title ? (
          <Text color="white" weight="medium">
            {title}
          </Text>
        ) : (
          children
        )}
      </Animated.View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    borderRadius: 16,
  },
});
