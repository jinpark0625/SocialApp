import { useEffect, useCallback } from "react";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { useRecoilState } from "recoil";
import { authState } from "@/atoms";

const setStorageItemAsync = async (key: string, value: string | null) => {
  if (Platform.OS === "web") {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error("Local storage is unavailable:", e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
};

const useStorageState = (key: string) => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const loadSession = async () => {
      try {
        let value = null;
        if (Platform.OS === "web") {
          value = localStorage.getItem(key);
        } else {
          value = await SecureStore.getItemAsync(key);
        }
        setAuth({ session: value, isLoading: false });
      } catch (e) {
        setAuth({ session: null, isLoading: false });
      }
    };

    loadSession();
  }, [key]);

  const setValue = useCallback(
    async (value: string | null) => {
      setAuth({ session: value, isLoading: false });
      await setStorageItemAsync(key, value);
    },
    [key]
  );

  return [auth, setValue] as const;
};

export default useStorageState;
