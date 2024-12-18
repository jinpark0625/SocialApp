import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
