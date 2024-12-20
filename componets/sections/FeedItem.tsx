import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import { Avatar, Text, Image } from "@/componets/common";
import { FeedItemProps } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks";
import { router } from "expo-router";

const FeedItem = ({
  id,
  userName,
  postedAt,
  body,
  source,
  commentCount,
}: FeedItemProps) => {
  const colorScheme = useThemeColor();

  const onPress = () => {
    router.navigate(`/feed/${id}`);
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Avatar />
        <View style={styles.marginLeft}>
          <Text variant="body2" weight="semiBold">
            {userName}
          </Text>
          <Text variant="body2" color="gray_300">
            {postedAt}
          </Text>
        </View>
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" variant="body2">
        {body}
      </Text>
      {source && (
        <Image
          width="100%"
          height={224}
          contentFit="cover"
          style={styles.image}
          source={source}
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
            {commentCount}
          </Text>
        </View>
      </View>
    </Pressable>
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
