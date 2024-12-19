import { ReactNode, useEffect } from "react";
import { useColorScheme, Platform } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { lightTheme, darkTheme } from "@/styles/theme";
import { RecoilRoot } from "recoil";
import { Modal } from "@/componets/common";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

const Providers = ({ children }: { children: ReactNode }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    if (Platform.OS === "android") {
      const setupNavigationBar = async () => {
        await NavigationBar.setBackgroundColorAsync(theme.colors.background);
        await NavigationBar.setButtonStyleAsync(
          scheme === "dark" ? "light" : "dark"
        );
      };

      setupNavigationBar();
    }
  }, [scheme, theme.colors.background]);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider value={theme}>
          <RecoilRoot>
            <StatusBar />
            {children}
            <Modal />
          </RecoilRoot>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Providers;
