import { palette } from "@/styles/theme";
import {
  StyleSheet,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";

const PostGridItem = ({ post, itemId }: { post: string; itemId: number }) => {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;

  const navigateToDetail = () => {
    router.navigate(`/feed/${itemId}`);
  };

  return (
    <Pressable
      onPress={navigateToDetail}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
          width: size,
          height: size,
        },
        styles.container,
      ]}
    >
      <Image
        style={styles.image}
        source={{ uri: post }}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { margin: 0.5 },
  image: {
    backgroundColor: palette.gray[200],
    width: "100%",
    height: "100%",
  },
});

export default PostGridItem;
