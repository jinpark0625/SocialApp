import { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  InputAccessoryView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Button, TextInput, Text } from "../common";
import { useFormControl, useThemeColor, useModal } from "@/hooks";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AUTH_ERROR_MESSAGES } from "@/constants";
import { AuthFormProps } from "@/types";

type AuthFormFields = {
  email: string;
  password: string;
  confirmPassword?: string;
  nickname?: string;
};

const AuthForm = ({
  isRegister = false,
  onSubmit,
  isSubmitting = false,
  inputAccessoryId,
}: AuthFormProps) => {
  const colorScheme = useThemeColor();
  const { showModal } = useModal();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const defaultValues = {
    email: "",
    password: "",
    ...(isRegister && {
      confirmPassword: "",
      nickname: "",
    }),
  };

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    setFocus,
    reset,
  } = useFormControl<AuthFormFields>({
    defaultValues,
  });

  const password = watch("password");

  const handleFormSubmit = handleSubmit(
    async (data) => {
      //  TODO: 실제 data 전달!
      await onSubmit(data);
    },
    (errors) => {
      const firstErrorField = Object.keys(errors)[0] as keyof AuthFormFields;

      if (firstErrorField) {
        showModal({
          type: "confirm",
          title: AUTH_ERROR_MESSAGES[firstErrorField].title,
          message:
            (errors[firstErrorField]?.message as string) ||
            AUTH_ERROR_MESSAGES[firstErrorField].message,
          onConfirm: () => console.log("확인"),
        });
      }
    }
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        reset();
      };
    }, [])
  );

  return (
    <>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          {/* 이메일 */}
          <TextInput
            control={control}
            name="email"
            placeholder="이메일 입력"
            autoCapitalize="none"
            autoComplete="off"
            keyboardType="email-address"
            textContentType="oneTimeCode"
            returnKeyType="next"
            rules={{
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "올바른 이메일 형식이 아닙니다",
              },
            }}
            onSubmitEditing={() => setFocus("password")}
          />
          {/* 비밀번호 */}
          <TextInput
            control={control}
            name="password"
            placeholder={
              isRegister ? "비밀번호 입력  (최대 6자리)" : "비밀번호 입력"
            }
            secureTextEntry={!isPasswordVisible}
            textContentType="oneTimeCode"
            inputAccessoryViewID={isRegister ? undefined : inputAccessoryId}
            returnKeyType={isRegister ? "next" : "done"}
            maxLength={6}
            rules={{
              required: "비밀번호를 입력해주세요",
              maxLength: {
                value: 6,
                message: "비밀번호는 6자리여야 합니다",
              },
            }}
            onSubmitEditing={
              isRegister ? () => setFocus("confirmPassword") : handleFormSubmit
            }
            icon={
              !isRegister && (
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color={colorScheme.icon}
                />
              )
            }
            onPressIcon={() =>
              !isRegister && setIsPasswordVisible((prev) => !prev)
            }
          />
          {isRegister && (
            <>
              {/* 비밀번호 확인 */}
              <TextInput
                control={control}
                name="confirmPassword"
                placeholder="비밀번호 확인"
                secureTextEntry
                textContentType="oneTimeCode"
                returnKeyType="next"
                maxLength={6}
                rules={{
                  required: "비밀번호 확인을 입력해주세요",
                  maxLength: {
                    value: 6,
                    message: "비밀번호는 6자리여야 합니다",
                  },
                  validate: (value: string | undefined) => {
                    if (value && value === password) {
                      return true;
                    }
                    return "비밀번호가 일치하지 않습니다";
                  },
                }}
                onSubmitEditing={
                  isRegister ? () => setFocus("nickname") : undefined
                }
              />
              {/* 닉네임  */}
              <TextInput
                control={control}
                name="nickname"
                placeholder="닉네임 입력 (최대 12자)"
                returnKeyType="done"
                maxLength={12}
                rules={{
                  required: "닉네임을 입력해주세요",
                  maxLength: {
                    value: 12,
                    message: "닉네임은 12자 이내여야 합니다",
                  },
                }}
                inputAccessoryViewID={inputAccessoryId}
                onSubmitEditing={handleFormSubmit}
              />
            </>
          )}
        </View>

        <View>
          {!isRegister && (
            <View style={styles.textButtonContainer}>
              <Text color="gray_300">아직 회원이 아니신가요?</Text>
              <TouchableOpacity
                style={styles.textButton}
                onPress={() => router.navigate("/register")}
                hitSlop={8}
              >
                <Text color="gray_600" weight="semiBold">
                  회원가입
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <Button
            disabled={!isValid || isSubmitting}
            title={isRegister ? "회원가입 하기" : "로그인 하기"}
            onPress={handleFormSubmit}
            style={styles.submitButton}
          />
        </View>
      </View>
      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID={inputAccessoryId}>
          <Button
            disabled={!isValid || isSubmitting}
            title={isRegister ? "회원가입 하기" : "로그인 하기"}
            onPress={handleFormSubmit}
            style={{ borderRadius: 0 }}
          />
        </InputAccessoryView>
      )}
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    gap: 8,
  },
  textButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 16,
  },
  textButton: {
    marginLeft: 8,
  },
  textButtonText: {
    textDecorationLine: "underline",
  },
  submitButton: {
    ...Platform.select({
      android: { marginBottom: 24 },
    }),
  },
});
