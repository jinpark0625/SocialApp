import {
  // ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
  Pressable,
} from "react-native";
import { Avatar, Text } from "@/componets/common";
import PostGridItem from "./PostGridItem";
import { useThemeColor } from "@/hooks";
import { router } from "expo-router";
import { UserInfoProps } from "@/types";
import { UserWithoutPasswordAndEmail } from "@/types/api";

const UserInfo = ({ isCurrentUser = false, user, data }: UserInfoProps) => {
  const colorScheme = useThemeColor();

  const renderItem = ({
    item,
  }: {
    item: Feed & { user: UserWithoutPasswordAndEmail };
  }) => <PostGridItem post={item.image} itemId={item.id} />;

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
            <Avatar size={64} source={user?.profileImg} />
            <Text weight="bold" style={styles.username}>
              {user?.nickname}
            </Text>
          </View>

          {isCurrentUser && (
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
          )}
        </View>
      }
      onEndReached={() => {}}
      refreshControl={
        <RefreshControl onRefresh={() => {}} refreshing={false} />
      }
      onEndReachedThreshold={0.25}
      ListEmptyComponent={
        <View style={styles.emptyItem}>
          <Text variant="body2" color="gray_400">
            게시물이 아직 업로드되지 않았습니다.
          </Text>
        </View>
      }
      // ListFooterComponent={
      //     <ActivityIndicator
      //       style={styles.bottomSpinner}
      //       size={32}
      //       color={palette.primary}
      //     />
      // }
    />
  );
};

export default UserInfo;

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
  emptyItem: { paddingTop: 20, alignItems: "center" },
});
