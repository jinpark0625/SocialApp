import { FlatList, StyleSheet } from "react-native";
import { CommentItem, CommentInput, FeedItem } from "@/componets/sections";
import { FeedDetailProps } from "@/types";

const FeedDetail = ({
  data,
  handleRemoveComment,
  handleModifyComment,
  currentUser,
  feedId,
}: FeedDetailProps) => {
  return (
    <>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={[styles.flatListContent]}
        data={data?.comments || []}
        renderItem={({ item }) => (
          <CommentItem
            id={item.id}
            message={item.text}
            postedAt={item.createdAt}
            userId={item.userId}
            onRemove={handleRemoveComment}
            onModify={handleModifyComment}
            isMyComment={item.userId === currentUser?.id}
          />
        )}
        ListHeaderComponent={
          <>
            <FeedItem
              id={data?.id || 0}
              userId={data?.userId || 0}
              nickname={data?.user?.nickname || ""}
              profileImg={data?.user?.profileImg || ""}
              image={data?.image || ""}
              text={data?.text || ""}
              comments={data?.comments || []}
              createdAt={data?.createdAt || ""}
            />
          </>
        }
        ListHeaderComponentStyle={{ paddingBottom: 12 }}
      />
      <CommentInput feedId={feedId} />
    </>
  );
};

export default FeedDetail;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    padding: 20,
  },
});
