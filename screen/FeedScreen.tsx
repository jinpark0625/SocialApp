import { FlatList, StyleSheet, View } from "react-native";
import { CommentItem, CommentInput, FeedItem } from "@/componets/sections";

const FeedScreen = ({ id }: { id: number }) => {
  const data = {
    id: 1,
    userName: "test",
    postedAt: "333",
    body: "sss",
    uri: "https://i.pinimg.com/736x/bf/24/3e/bf243e885e034736c1b954fd7e5002ac.jpg",
    commentCount: 2,
  };

  const commentData = [
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
    {
      id: 1,
      message: "호잇",
      userId: 1,
      userName: "test",
      postedAt: "333",
      isMyComment: false,
    },
  ];

  const handleRemoveComment = (id) => {
    // TODO: remove
  };

  const handleModifyComment = (id) => {
    // TODO: remove
  };

  return (
    <>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={[styles.flatListContent]}
        data={commentData}
        renderItem={({ item }) => (
          <CommentItem
            id={item.id}
            message={item.message}
            postedAt={item.postedAt}
            userName={item.userName}
            onRemove={handleRemoveComment}
            onModify={handleModifyComment}
            // isMyComment={item.userId === currentUser?.id}
            isMyComment={item.isMyComment}
          />
        )}
        ListHeaderComponent={
          <>
            <FeedItem
              id={id}
              userName={data.userName}
              postedAt={data.postedAt}
              body={data.body}
              source={data.uri}
              commentCount={data.commentCount}
            />
          </>
        }
        ListHeaderComponentStyle={{ paddingBottom: 12 }}
      />
      <CommentInput articleId={id} />
    </>
  );
};

export default FeedScreen;

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
