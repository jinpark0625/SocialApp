import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  Pressable,
} from "react-native";
import { Avatar, Text } from "@/componets/common";
import { PostGridItem } from "@/componets/sections";
import { useThemeColor } from "@/hooks";
import { router } from "expo-router";

const renderItem = ({ item }) => <PostGridItem post={item.uri} />;

const MyInfoScreen = () => {
  const colorScheme = useThemeColor();

  const data = [
    {
      id: 1,
      uri: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      uri: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      uri: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      uri: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 5,
      uri: "https://picsum.photos/id/5/200/300",
    },
    {
      id: 1,
      uri: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      uri: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      uri: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      uri: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 5,
      uri: "https://picsum.photos/id/5/200/300",
    },
    {
      id: 1,
      uri: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      uri: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      uri: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      uri: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 5,
      uri: "https://picsum.photos/id/5/200/300",
    },
  ];

  const navigateToEdit = () => {
    router.navigate("/user/edit");
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={(item, index) => (item.id + index).toString()}
      ListHeaderComponent={
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar size={64} />
            <Text weight="bold" style={styles.username}>
              테스트
            </Text>
          </View>

          <Pressable
            style={{
              backgroundColor: colorScheme.text.gray_200,
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8,
            }}
            onPress={navigateToEdit}
          >
            <Text variant="body2" weight="medium">
              프로필 수정
            </Text>
          </Pressable>
        </View>
      }
      //   onEndReached={onLoadMore}
      onEndReachedThreshold={0.25}
      //   ListFooterComponent={
      //     !noMorePost && (
      //       <ActivityIndicator
      //         style={styles.bottomSpinner}
      //         size={32}
      //         color="#6200ee"
      //       />
      //     )
      //   }
      //   refreshControl={
      //     <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      //   }
    />
  );
};

export default MyInfoScreen;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  username: {
    marginLeft: 16,
  },
  bottomSpinner: {
    height: 128,
  },
});
