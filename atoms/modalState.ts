import { atom } from "recoil";
import { ModalProps } from "@/types/components";

interface ModalState {
  isOpen: boolean;
  props?: ModalProps;
}

const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    isOpen: false,
    props: undefined,
  },
});

export default modalState;
