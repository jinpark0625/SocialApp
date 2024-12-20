import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import { FeedItem } from "@/componets/sections";
import { useTheme } from "@react-navigation/native";
import { UserWithoutPasswordAndEmail } from "@/types/api";

const Feeds = ({
  data,
}: {
  data: (Feed & { user: UserWithoutPasswordAndEmail })[];
}) => {
  const colorSceheme = useTheme();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <FeedItem
            id={item.id}
            userId={item.userId}
            nickname={item.user.nickname}
            profileImg={item.user.profileImg}
            image={item.image}
            text={item.text}
            comments={item.comments}
            createdAt={item.createdAt}
          />
        </View>
      )}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      ItemSeparatorComponent={() => (
        <View
          style={[
            styles.separator,
            { backgroundColor: colorSceheme.colors.border },
          ]}
        />
      )}
      ListFooterComponent={() => (
        <>
          {data?.length > 0 ? <View style={styles.separator} /> : null}
          {/* {isFetchingNextPage && (
            <ActivityIndicator
              size="small"
              color="black"
              style={styles.spinner}
            />
          )} */}
        </>
      )}
      onEndReachedThreshold={0.5}
      onEndReached={() => {}}
      refreshControl={
        <RefreshControl onRefresh={() => {}} refreshing={false} />
      }
    />
  );
};

export default Feeds;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  list: {
    flex: 1,
  },
  listItem: {
    paddingHorizontal: 20,
  },
  separator: {
    width: "100%",
    marginVertical: 20,
    height: 1,
  },
  spinner: {
    backgroundColor: "white",
    paddingTop: 32,
    paddingBottom: 32,
  },
});
