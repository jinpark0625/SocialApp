import {
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { FeedItem } from "@/componets/sections";
import { useTheme } from "@react-navigation/native";

const FeedsScreen = () => {
  const colorSceheme = useTheme();

  const data = [
    {
      id: 1,
      userName: "test",
      postedAt: "333",
      body: "sss",
      uri: "https://i.pinimg.com/736x/bf/24/3e/bf243e885e034736c1b954fd7e5002ac.jpg",
      commentCount: 2,
    },
    {
      id: 2,
      userName: "test",
      postedAt: "333",
      body: "sss",
      uri: undefined,
      commentCount: 1,
    },
    {
      id: 3,
      userName: "test",
      postedAt: "333",
      body: "sss",
      uri: undefined,
      commentCount: 0,
    },
  ];

  const isFetchingNextPage = false;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <FeedItem
            id={item.id}
            userName={item.userName}
            postedAt={item.postedAt}
            body={item.body}
            source={item.uri}
            commentCount={item.commentCount}
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
          {data.length > 0 ? <View style={styles.separator} /> : null}
          {isFetchingNextPage && (
            <ActivityIndicator
              size="small"
              color="black"
              style={styles.spinner}
            />
          )}
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

export default FeedsScreen;

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
