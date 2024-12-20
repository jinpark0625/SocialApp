import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const useImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("사진선택이 취소 되었습니다.");
    }
  };

  const removeImage = () => {
    setSelectedImage("");
  };

  return { selectedImage, pickImageAsync, removeImage };
};

export default useImagePicker;
