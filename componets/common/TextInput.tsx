import {
  Pressable,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from "react-native";
import { Controller, FieldValues } from "react-hook-form";
import { palette } from "@/styles/theme";
import { useThemeColor } from "@/hooks";
import { TextInputProps } from "@/types";

const TextInput = <T extends FieldValues>({
  control,
  rules,
  placeholder = "",
  name,
  style,
  icon,
  onPressIcon,
  ...props
}: TextInputProps<T>) => {
  const colorScheme = useThemeColor();

  const textInputStyles = {
    backgroundColor: colorScheme.input,
    borderColor: colorScheme.border,
    color: colorScheme.text.gray_500,
  };

  return (
    <View>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RNTextInput
            ref={ref}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={[textInputStyles, styles.container, style]}
            placeholderTextColor={palette.gray[300]}
            {...props}
          />
        )}
      />
      {icon && (
        <Pressable onPress={onPressIcon} style={styles.icon} hitSlop={8}>
          {icon}
        </Pressable>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 54,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    fontFamily: "Pretendard-Regular",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    right: 16,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
});
