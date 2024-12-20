import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";
import type { ConfirmModalProps as BaseConfirmModalProps } from "@/types/components";
import { useThemeColor } from "@/hooks";

interface ConfirmModalProps {
  modalProps: BaseConfirmModalProps;
  onClose: () => void;
}

export const ConfirmModal = ({ modalProps, onClose }: ConfirmModalProps) => {
  const { title, message, onConfirm, onCancel } = modalProps;
  const colorScheme = useThemeColor();

  return (
    <View
      style={[{ backgroundColor: colorScheme.modal }, styles.modalContainer]}
    >
      {title && (
        <Text variant="subheading" weight="bold" style={styles.title}>
          {title}
        </Text>
      )}
      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttonContainer}>
        {onCancel && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onCancel?.();
              onClose();
            }}
          >
            <Text variant="subheading" weight="semiBold" color="gray_300">
              취소
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await onConfirm?.();
            onClose();
          }}
        >
          <Text variant="subheading" weight="semiBold">
            확인
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 16,
    padding: 20,
    width: "80%",
    maxWidth: 400,
  },
  title: {
    marginBottom: 12,
  },
  message: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 10,
  },
});
