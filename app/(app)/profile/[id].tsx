import { useLocalSearchParams } from "expo-router";
import ProfileScreen from "@/screen/ProfileScreen";
const Feed = () => {
  const { id } = useLocalSearchParams();

  return <ProfileScreen userId={id} />;
};

export default Feed;
