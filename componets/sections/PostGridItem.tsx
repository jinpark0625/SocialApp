import { palette } from "@/styles/theme";
import {
  StyleSheet,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";

const PostGridItem = ({ post }) => {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;

  return (
    <Pressable
      onPress={() => {}}
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
