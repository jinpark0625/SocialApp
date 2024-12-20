import { Image as ExpoImage } from "expo-image";
import { ImageProps } from "@/types";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Image = ({
  source,
  width = 48,
  height = 48,
  style,
  contentFit = "cover",
}: ImageProps) => {
  return (
    <ExpoImage
      source={source ? { uri: source } : require("@/assets/images/user.png")}
      style={[
        {
          width,
          height,
        },
        style,
      ]}
      placeholder={{ blurhash }}
      contentFit={contentFit}
      transition={1000}
    />
  );
};

export default Image;
