import { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { lightTheme, darkTheme } from "@/styles/theme";
import { RecoilRoot } from "recoil";
import { Modal } from "@/componets/common";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Providers = ({ children }: { children: ReactNode }) => {
  const scheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider value={scheme === "dark" ? darkTheme : lightTheme}>
          <RecoilRoot>
            {children}
            <StatusBar />
            <Modal />
          </RecoilRoot>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Providers;
