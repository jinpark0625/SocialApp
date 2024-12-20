import { atom } from "recoil";
import mockDatabase from "@/data/mockDatabase.json";

// TODO: default 값을 null로 변경
// 앱 종료 후 재시작하거나 새로고침할 경우, 실제 유저 정보가 없을 때 mockData 사용
const userState = atom<User | null>({
  key: "userState",
  default: mockDatabase.users[0],
});

export default userState;
