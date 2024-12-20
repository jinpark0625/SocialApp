import { useState, useEffect } from "react";
import { Feeds } from "@/componets/sections";
import { useMockApi, useModal } from "@/hooks";
import { mockApi } from "@/api/mockApi";
import { UserWithoutPasswordAndEmail } from "@/types/api";

const FeedsScreen = () => {
  const { showModal } = useModal();
  const { apiCall } = useMockApi();

  const [data, setData] = useState<
    (Feed & { user: UserWithoutPasswordAndEmail })[]
  >([]);

  const fetchFeeds = async () => {
    try {
      const res = await apiCall(mockApi.getFeeds);
      setData(res || []);
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
    fetchFeeds();
  }, []);

  return <Feeds data={data} />;
};

export default FeedsScreen;
