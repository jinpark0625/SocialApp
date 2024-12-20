import { useEffect } from "react";
import { Platform, InputAccessoryView, View, StyleSheet } from "react-native";
import { Avatar, Button, TextInput, Text } from "@/componets/common";
import { useFormControl, useModal } from "@/hooks";
import { AUTH_ERROR_MESSAGES } from "@/constants";
import { Header } from "@/componets/layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { EditFormProps } from "@/types";

const EditForm = ({
  currentUser,
  selectedImage,
  pickImageAsync,
  inputAccessoryViewID,
  onSubmit,
}: EditFormProps) => {
  const colorScheme = useTheme();
  const navigation = useNavigation();

  const { showModal } = useModal();

  const defaultValues = {
    nickname: currentUser?.nickname,
  };

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useFormControl({
    defaultValues,
  });

  const handleFormSubmit = handleSubmit(
    async (data) => {
      await onSubmit(data, selectedImage);
    },
    (errors) => {
      if (errors.nickname) {
        showModal({
          type: "confirm",
          title: AUTH_ERROR_MESSAGES["nickname"].title,
          message:
            (errors["nickname"]?.message as string) ||
            AUTH_ERROR_MESSAGES["nickname"].message,
          onConfirm: () => console.log("확인"),
        });
      }
    }
  );

  // 커스텀헤더적용
  useEffect(() => {
    // 헤더 버튼 설정
    navigation.setOptions({
      header: () => (
        <Header
          left={
            <TouchableOpacity
              onPress={() => router.navigate("/(app)/(tabs)/user")}
              hitSlop={8}
              style={{ width: 36, marginLeft: -3 }}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={colorScheme.colors.text}
              />
            </TouchableOpacity>
          }
          right={
            <TouchableOpacity
              hitSlop={8}
              style={{ alignItems: "flex-end" }}
              onPress={handleFormSubmit}
            >
              <Text variant="subheading" weight="semiBold">
                수정
              </Text>
            </TouchableOpacity>
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Avatar
          size={90}
          isIcon
          onPress={pickImageAsync}
          source={selectedImage ?? currentUser?.profileImg}
        />
        <View style={styles.inputWrap}>
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
            inputAccessoryViewID={inputAccessoryViewID}
            onSubmitEditing={handleFormSubmit}
          />
        </View>
      </View>
      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            disabled={!isValid}
            title="수정하기"
            onPress={handleFormSubmit}
            style={{ borderRadius: 0 }}
          />
        </InputAccessoryView>
      )}
    </>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputWrap: {
    width: "100%",
    marginTop: 20,
  },
});
