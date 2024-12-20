import { Stack } from "expo-router";
import { Header } from "@/componets/layout";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth, useModal } from "@/hooks";

const UserLayout = () => {
  const colorScheme = useTheme();

  const { showModal, closeModal } = useModal();
  const { signOut } = useAuth();

  const handleLogout = () => {
    showModal({
      type: "confirm",
      title: "로그아웃",
      message: "로그아웃 하시겠습니까?",
      onConfirm: signOut,
      onCancel: closeModal,
    });
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <Header
              left={null}
              right={
                <TouchableOpacity
                  hitSlop={8}
                  style={{ alignItems: "flex-end" }}
                  onPress={handleLogout}
                >
                  <Ionicons
                    name="settings"
                    size={24}
                    color={colorScheme.colors.text}
                  />
                </TouchableOpacity>
              }
            />
          ),
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
};

export default UserLayout;
