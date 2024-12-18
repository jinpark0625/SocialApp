import { Text as RNText, TextStyle, StyleSheet } from "react-native";
import { TextProps } from "@/types/components";
import { useThemeColor } from "@/hooks";

const Text = ({
  variant = "body",
  weight = "regular",
  align = "left",
  color = "gray_500",
  style,
  children,
  ...props
}: TextProps) => {
  const colorScheme = useThemeColor();

  const textStyles: TextStyle = {
    ...styles[variant],
    ...styles[weight],
    ...styles[align],
    color: colorScheme.text[color],
  };

  return (
    <RNText style={[textStyles, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  caption: {
    fontSize: 12,
    lineHeight: 18,
  },
  body2: {
    fontSize: 14,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  subheading: {
    fontSize: 18,
    lineHeight: 27,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
  },
  hero: {
    fontSize: 28,
    lineHeight: 36,
  },
  regular: {
    fontFamily: "Pretendard-Regular",
  },
  medium: {
    fontFamily: "Pretendard-Medium",
  },
  semiBold: {
    fontFamily: "Pretendard-SemiBold",
  },
  bold: {
    fontFamily: "Pretendard-Bold",
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});
