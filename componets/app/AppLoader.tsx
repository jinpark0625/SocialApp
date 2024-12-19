import { useEffect } from "react";
import { Slot } from "expo-router";
import { useAuth } from "@/hooks";
import * as SplashScreen from "expo-splash-screen";

const AppLoader = ({
  fontsLoaded,
  fontError,
}: {
  fontsLoaded: boolean;
  fontError: Error | null;
}) => {
  const { isLoading: isAuthLoading } = useAuth();

  useEffect(() => {
    if ((fontsLoaded || fontError) && !isAuthLoading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, isAuthLoading]);

  if ((!fontsLoaded && !fontError) || isAuthLoading) {
    return null;
  }

  return <Slot />;
};

export default AppLoader;
