import { useLocalSearchParams } from "expo-router";
import FeedScreen from "@/screen/FeedScreen";
const Feed = () => {
  const { id } = useLocalSearchParams();

  return <FeedScreen feedId={Number(id)} />;
};

export default Feed;
