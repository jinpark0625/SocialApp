import { useState } from "react";
import { StyleSheet, Pressable, View, Platform } from "react-native";
import { Text } from "../common";
import CommentModal from "./CommentModal";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommentInputProps } from "@/types";

const CommentInput = ({ feedId }: CommentInputProps) => {
  const colorScheme = useTheme();
  const { bottom } = useSafeAreaInsets();

  const [isWriting, setIsWriting] = useState(false);

  const onPress = () => {
    setIsWriting(true);
  };
  const onClose = () => {
    setIsWriting(false);
  };
  const onSubmit = (message: string) => {
    setIsWriting(false);
  };

  return (
    <>
      <Pressable
        style={[
          styles.container,
          {
            borderColor: colorScheme.colors.border,
            backgroundColor: colorScheme.colors.background,
            paddingBottom: bottom,
          },
        ]}
        onPress={onPress}
      >
        <View
          style={[
            {
              backgroundColor: colorScheme.colors.border,
            },
            styles.comment,
          ]}
        >
          <Text color="gray_300">댓글을 입력해주세요.</Text>
        </View>
      </Pressable>
      <CommentModal onClose={onClose} visible={isWriting} onSubmit={onSubmit} />
    </>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderTopWidth: 1,
    justifyContent: "center",
    marginBottom: 16,
    paddingVertical: 16,
  },
  comment: {
    height: 44,
    paddingVertical: Platform.select({
      ios: 12,
      android: 8,
    }),
    paddingHorizontal: 16,
    borderRadius: 100,
  },
});
