import React from "react";
import {
  Modal as RNModal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useRecoilValue } from "recoil";
import { modalState } from "@/atoms";
import { useModal } from "@/hooks";
import { ConfirmModal } from "./ModalVariants";
import { SafeAreaView } from "react-native-safe-area-context";

const Modal = () => {
  const { isOpen, props } = useRecoilValue(modalState);
  const { closeModal } = useModal();

  const renderContent = () => {
    if (!props) return null;

    switch (props.type) {
      case "confirm":
        return <ConfirmModal modalProps={props} onClose={closeModal} />;
      case "custom":
        return props.component;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNModal visible={isOpen} transparent onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              {renderContent()}
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
