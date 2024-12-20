import { useState, useEffect } from "react";
import { FeedDetail } from "@/componets/sections";
import { useMockApi, useModal, useUser } from "@/hooks";
import { mockApi } from "@/api/mockApi";
import { UserWithoutPasswordAndEmail } from "@/types/api";

const FeedScreen = ({ feedId }: { feedId: number }) => {
  const { showModal } = useModal();
  const { apiCall } = useMockApi();
  const { currentUser } = useUser();

  const [data, setData] = useState<
    (Feed & { user: UserWithoutPasswordAndEmail }) | null
  >(null);

  const fetchFeed = async () => {
    try {
      const res = await apiCall(mockApi.getFeedDetail, feedId);

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

  const handleRemoveComment = (id: number) => {
    // TODO: remove
  };

  const handleModifyComment = (id: number) => {
    // TODO: remove
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <FeedDetail
      data={data}
      handleRemoveComment={handleRemoveComment}
      handleModifyComment={handleModifyComment}
      currentUser={currentUser}
      feedId={feedId}
    />
  );
};

export default FeedScreen;
