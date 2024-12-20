import { useEffect, useState } from "react";
import { UserInfo } from "@/componets/sections";
import { useUser, useMockApi, useModal } from "@/hooks";
import { mockApi } from "@/api/mockApi";
import { UserWithoutPasswordAndEmail } from "@/types/api";

const ProfileScreen = ({ userId }: { userId: string | string[] }) => {
  const { showModal } = useModal();
  const { currentUser } = useUser();
  const { apiCall } = useMockApi();

  const [data, setData] = useState<
    (Feed & { user: UserWithoutPasswordAndEmail })[] | null
  >(null);

  // TODO: 유저정보 불러오는 API 만들기...
  const fetchPostedFeeds = async () => {
    try {
      const res = await apiCall(mockApi.getUserFeeds, Number(userId));
      setData(res);
    } catch (err) {
      if (err instanceof Error) {
        showModal({
          type: "confirm",
          title: "불러오기 실패",
          message: err.message,
          onConfirm: () => console.log("확인"),
        });
      } else {
        showModal({
          type: "confirm",
          title: "불러오기 실패",
          message: "게시글을 불러올 수 없습니다. 잠시후 다시 시도 해주세요.",
          onConfirm: () => console.log("확인"),
        });
      }
    }
  };

  useEffect(() => {
    fetchPostedFeeds();
  }, [userId]);

  return (
    <UserInfo
      isCurrentUser={currentUser?.id === data?.[0]?.user.id}
      user={data?.[0]?.user as User}
      data={data}
    />
  );
};

export default ProfileScreen;
