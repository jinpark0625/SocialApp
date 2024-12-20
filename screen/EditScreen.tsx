import { StyleSheet } from "react-native";
import { EditForm } from "@/componets/sections";
import { useModal, useImagePicker, useUser, useMockApi } from "@/hooks";
import { mockApi } from "@/api/mockApi";

const EditScreen = () => {
  const INPUT_ACCESSORY_ID = "nickname";

  const { currentUser, editUserProfile } = useUser();
  const { selectedImage, pickImageAsync } = useImagePicker();
  const { showModal } = useModal();
  const { apiCall } = useMockApi();

  const updateUserProfile = async (
    data: ProfileData,
    selectedImage: string | undefined
  ) => {
    try {
      const updatedData = {
        nickname: data.nickname || currentUser?.nickname,
        profileImg: selectedImage || currentUser?.profileImg,
      };

      const res = await apiCall(
        mockApi.updateProfile,
        Number(currentUser?.id),
        updatedData
      );

      if (res) {
        editUserProfile(res.nickname, res.profileImg);
        showModal({
          type: "confirm",
          title: "유저 프로필 수정",
          message: "성공적으로 프로필이 변경되었습니다.",
          onConfirm: () => console.log("확인"),
        });
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        showModal({
          type: "confirm",
          title: "유저 프로필 수정 실패",
          message: err.message,
          onConfirm: () => console.log("확인"),
        });
      } else {
        showModal({
          type: "confirm",
          title: "유저 프로필 수정 실패",
          message: "프로필을 수정할 수 없습니다. 잠시후 다시 시도 해주세요.",
          onConfirm: () => console.log("확인"),
        });
      }
    }
  };

  return (
    <EditForm
      currentUser={currentUser}
      selectedImage={selectedImage}
      pickImageAsync={pickImageAsync}
      inputAccessoryViewID={INPUT_ACCESSORY_ID}
      onSubmit={updateUserProfile}
    />
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
