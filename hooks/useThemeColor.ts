import { useColorScheme } from "react-native";
import { colorScheme } from "@/styles/theme";

const useThemeColor = () => {
  const theme = useColorScheme() ?? "light";

  return colorScheme[theme];
};

export default useThemeColor;
