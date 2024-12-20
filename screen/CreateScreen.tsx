import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "@/componets/common";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useImagePicker, useFormControl, useThemeColor } from "@/hooks";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateScreen = () => {
  const { selectedImage, pickImageAsync, removeImage } = useImagePicker();

  const colorScheme = useThemeColor();
  const defaultValues = {
    body: "",
  };

  const { control, handleSubmit, reset } = useFormControl({
    defaultValues,
  });

  useFocusEffect(
    useCallback(() => {
      return () => {
        reset();
        removeImage();
      };
    }, [])
  );

  // TODO:onSubmit

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      extraScrollHeight={60}
      extraHeight={60}
      enableOnAndroid
    >
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 224,
            borderRadius: 16,
            backgroundColor: colorScheme.input,
          }}
          onPress={pickImageAsync}
        >
          {selectedImage ? (
            <>
              <View style={styles.closeButton}>
                <TouchableOpacity onPress={removeImage}>
                  <Ionicons
                    name="close-circle"
                    size={36}
                    color={colorScheme.text.gray_500}
                  />
                </TouchableOpacity>
              </View>

              <Image
                source={selectedImage}
                style={[
                  {
                    borderColor: colorScheme.border,
                  },
                  styles.image,
                ]}
                contentFit="cover"
                transition={1000}
              />
            </>
          ) : (
            <View style={styles.center}>
              <Ionicons name="camera" size={28} color={colorScheme.icon} />
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          control={control}
          name="body"
          placeholder="공유하고 싶은 내용이 있으신가요? (최대 200자, 선택사항)"
          returnKeyType="default"
          multiline
          scrollEnabled
          maxLength={200}
          style={[styles.inputStyle]}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 12,
  },
  inputStyle: {
    paddingTop: 16,
    height: 160,
    textAlignVertical: "top",
  },
  closeButton: {
    position: "absolute",
    width: 48,
    height: 48,
    top: 12,
    right: 0,
    zIndex: 9999,
  },
  image: {
    width: "100%",
    height: 224,
    borderRadius: 16,
    borderWidth: 1,
  },
});

export default CreateScreen;
