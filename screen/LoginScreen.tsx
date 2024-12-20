import {
  View,
  Keyboard,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";
import { useAuth, useMockApi, useModal, useUser } from "@/hooks";
import { mockApi } from "@/api/mockApi";
import { UserSubmit } from "@/types";
import { router } from "expo-router";

const LoginScreen = () => {
  const INPUT_ACCESSORY_ID = "password";

  const { showModal } = useModal();
  const { signIn } = useAuth();
  const { setCurrentUser } = useUser();
  const { apiCall, loading } = useMockApi();

  const onSubmit = async (userData: UserSubmit) => {
    try {
      const user = await apiCall(
        mockApi.login,
        userData.email,
        userData.password
      );
      if (user) {
        await signIn();
        setCurrentUser(user);
        router.replace("/(app)/(tabs)");
      }
    } catch (err) {
      if (err instanceof Error) {
        showModal({
          type: "confirm",
          title: "로그인 실패",
          message: err.message,
          onConfirm: () => console.log("확인"),
        });
      } else {
        showModal({
          type: "confirm",
          title: "로그인 실패",
          message: "로긍인 실패했습니다. 잠시후 다시 시도 해주세요.",
          onConfirm: () => console.log("확인"),
        });
      }
    }
  };

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <View style={styles.container}>
          <Hero
            content={`환영합니다!${`\n`}로그인 후 시작하세요`}
            style={styles.hero}
          />
          <AuthForm
            onSubmit={onSubmit}
            isSubmitting={loading}
            inputAccessoryId={INPUT_ACCESSORY_ID}
          />
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    paddingTop: Platform.OS === "ios" ? 60 : 76,
    paddingHorizontal: 20,
  },
});
