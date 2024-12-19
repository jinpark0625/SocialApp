// hooks/useModal.ts
import { useSetRecoilState } from "recoil";
import { modalState } from "@/atoms";
import { ModalProps } from "@/types/components";

const useModal = () => {
  const setModal = useSetRecoilState(modalState);

  const showModal = (props: ModalProps) => {
    setModal({
      isOpen: true,
      props,
    });
  };

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return { showModal, closeModal };
};

export default useModal;
