import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/hooks";
import { Header } from "@/componets/layout";

const AppLayout = () => {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="feed/[id]"
        options={{
          header: () => <Header />,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="profile/[id]"
        options={{
          header: () => <Header />,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
};

export default AppLayout;
