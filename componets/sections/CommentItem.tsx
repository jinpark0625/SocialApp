import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "../common";
import { CommentItemProps } from "@/types";

const CommentItem = ({
  id,
  message,
  // userName,
  userId,
  postedAt,
  isMyComment,
  onRemove,
  onModify,
}: CommentItemProps) => {
  const formattedDate = new Date(postedAt).toDateString();

  const handleRemove = () => onRemove(id);
  const handleModify = () => onModify(id);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text variant="body2" weight="semiBold">
          {/* TODO: userName으로 데이터변환.. */}
          {userId} (userName으로 변경필요)
        </Text>
        <Text variant="caption" weight="medium" color="gray_300">
          {formattedDate}
        </Text>
      </View>
      <Text variant="body2" weight="medium">
        {message}
      </Text>
      {isMyComment && (
        <View style={styles.actionButtons}>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            hitSlop={8}
            onPress={handleModify}
          >
            <Text variant="caption" weight="semiBold">
              수정
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            hitSlop={8}
            onPress={handleRemove}
          >
            <Text variant="caption" weight="semiBold" color="primary">
              삭제
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postedAt: {
    fontWeight: "bold",
  },
  date: {
    color: "#546e7a",
    fontSize: 10,
    marginTop: 4,
  },
  message: {
    marginTop: 4,
  },
  actionButtons: {
    gap: 8,
    marginTop: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  separator: {
    width: 8,
  },

  pressed: {
    opacity: 0.75,
  },
});
