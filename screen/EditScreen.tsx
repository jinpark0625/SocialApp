import { Platform, InputAccessoryView, View, StyleSheet } from "react-native";
import { Avatar, Button, TextInput } from "@/componets/common";
import { useFormControl, useModal, useImagePicker } from "@/hooks";
import { AUTH_ERROR_MESSAGES } from "@/constants";

const INPUT_ACCESSORY_ID = "nickname";

const EditScreen = ({ onSubmit }) => {
  const { selectedImage, pickImageAsync } = useImagePicker();
  const { showModal } = useModal();

  const defaultValues = {
    nickname: "",
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
      //  TODO: 실제 data 전달!
      await onSubmit();
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

  return (
    <>
      <View style={styles.container}>
        <Avatar
          size={90}
          isIcon
          onPress={pickImageAsync}
          source={selectedImage}
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
            inputAccessoryViewID={INPUT_ACCESSORY_ID}
            onSubmitEditing={handleFormSubmit}
          />
        </View>
      </View>
      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID={INPUT_ACCESSORY_ID}>
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

export default EditScreen;

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
