import { useLocalSearchParams } from "expo-router";
import FeedScreen from "@/screen/FeedScreen";
const Feed = () => {
  const { id } = useLocalSearchParams();

  return <FeedScreen id={id} />;
};

export default Feed;
