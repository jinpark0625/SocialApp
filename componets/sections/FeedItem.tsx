import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import { Avatar, Text, Image } from "@/componets/common";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks";
import { router } from "expo-router";
import { FeedItemProps } from "@/types";

const FeedItem = ({
  id,
  userId,
  nickname,
  profileImg,
  image,
  text,
  comments,
  createdAt,
}: FeedItemProps) => {
  const colorScheme = useThemeColor();

  const navigateToFeed = () => {
    router.navigate(`/feed/${id}`);
  };

  const navigateToProfile = () => {
    router.navigate(`/profile/${userId}`);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.row} onPress={navigateToProfile}>
        <Avatar source={profileImg} />
        <View style={styles.marginLeft}>
          <Text variant="body2" weight="semiBold">
            {nickname}
          </Text>
          <Text variant="body2" color="gray_300">
            {createdAt}
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.container} onPress={navigateToFeed}>
        <Text numberOfLines={2} ellipsizeMode="tail" variant="body2">
          {text}
        </Text>
        {image && (
          <Image
            width="100%"
            height={224}
            contentFit="cover"
            style={styles.image}
            source={image}
          />
        )}
        <View style={styles.row}>
          <TouchableOpacity>
            <Ionicons
              name="heart-outline"
              size={26}
              color={colorScheme.text.gray_400}
            />
          </TouchableOpacity>
          <View style={[styles.row, styles.marginLeft]}>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={colorScheme.text.gray_400}
            />
            <Text
              variant="caption"
              color="gray_500"
              style={styles.marginLeftSmall}
            >
              {comments?.length}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  marginLeft: {
    marginLeft: 12,
  },
  marginLeftSmall: {
    marginLeft: 8,
  },
  image: {
    borderRadius: 16,
  },
});
