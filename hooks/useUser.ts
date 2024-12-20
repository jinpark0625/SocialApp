import { useRecoilState } from "recoil";
import { userState } from "@/atoms";
const useUser = () => {
  const [currentUser, set] = useRecoilState(userState);

  const setCurrentUser = (user: User) => {
    set(user);
  };

  const editUserProfile = (nickname: string, profileImg: string) => {
    set((prev) => {
      console.log("---re", prev);

      if (!prev) {
        // prev가 null인 경우 초기값을 설정하거나 에러 처리
        console.error("Current user is null.");
        return null;
      }

      return {
        ...prev,
        nickname,
        profileImg,
      };
    });
  };

  return { currentUser, setCurrentUser, editUserProfile };
};

export default useUser;
