import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { palette } from "@/styles/theme";
import { useThemeColor } from "@/hooks";
import { TextInputProps } from "@/types";

const TextInput = ({
  control,
  placeholder = "",
  name,
  style,
  ...props
}: TextInputProps) => {
  const colorScheme = useThemeColor();

  const textInputStyles = {
    backgroundColor: colorScheme.input,
    borderColor: colorScheme.border,
    color: colorScheme.text.gray_500,
  };

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          style={[textInputStyles, styles.container, style]}
          placeholderTextColor={palette.gray[300]}
          {...props}
        />
      )}
      name={name}
    />
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
});
