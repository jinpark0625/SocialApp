import { useTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { palette } from "@/styles/theme";
import { CommentFormProps } from "@/types";

const CommentModal = ({
  visible,
  onClose,
  onSubmit,
  initialMessage,
}: CommentFormProps) => {
  const colorScheme = useTheme();

  const { bottom } = useSafeAreaInsets();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(initialMessage ?? "");
  }, [initialMessage]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding" })}
        style={styles.keyboardAvoiding}
        keyboardVerticalOffset={Platform.select({ ios: -bottom })}
      >
        <View style={styles.container}>
          <Pressable style={styles.dismissArea} onTouchStart={onClose} />
          <View
            style={[
              styles.modalBox,
              {
                backgroundColor: colorScheme.colors.background,
                paddingBottom: 16 + bottom,
              },
            ]}
          >
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colorScheme.colors.border,
                  color: colorScheme.colors.text,
                },
              ]}
              autoFocus
              returnKeyType="send"
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={() => {
                onSubmit(message);
                setMessage("");
              }}
              placeholder="댓글을 입력해주세요."
            />
            {message && (
              <Pressable
                style={styles.sendButton}
                onPress={() => {
                  onSubmit(message);
                  setMessage("");
                }}
              >
                <Ionicons name="arrow-up" size={18} color="white" />
              </Pressable>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    flex: 1,
  },
  dismissArea: {
    flex: 1,
  },
  keyboardAvoiding: { flex: 1 },
  modalBox: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  input: {
    height: 44,
    paddingVertical: Platform.select({
      ios: 12,
      android: 8,
    }),
    paddingHorizontal: 16,
    borderRadius: 100,
    fontFamily: "Pretendard-Regular",
    fontSize: 16,
  },
  sendButton: {
    position: "absolute",
    top: 23,
    right: 24,
    backgroundColor: palette.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
