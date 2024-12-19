import { atom } from "recoil";

interface AuthState {
  session: string | null;
  isLoading: boolean;
}

const authState = atom<AuthState>({
  key: "authState",
  default: {
    session: null,
    isLoading: true,
  },
});

export default authState;
