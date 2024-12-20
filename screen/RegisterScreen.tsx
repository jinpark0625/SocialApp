import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth, useMockApi, useModal, useUser } from "@/hooks";
import { mockApi } from "@/api/mockApi";
import { router } from "expo-router";
import { UserSubmit } from "@/types";

const RegisterScreen = () => {
  const INPUT_ACCESSORY_ID = "nickname";
  const { bottom } = useSafeAreaInsets();

  const { showModal } = useModal();
  const { signIn } = useAuth();
  const { setCurrentUser } = useUser();
  const { apiCall, loading } = useMockApi();

  const onSubmit = async (userData: UserSubmit) => {
    try {
      const user = await apiCall(
        mockApi.signUp,
        userData.email,
        userData.password,
        userData.nickname
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
          title: "회원가입 실패",
          message: err.message,
          onConfirm: () => console.log("확인"),
        });
      } else {
        showModal({
          type: "confirm",
          title: "회원가입 실패",
          message: "회원가입에 실패했습니다. 잠시후 다시 시도 해주세요.",
          onConfirm: () => console.log("확인"),
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? undefined : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -54}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ paddingBottom: bottom, ...styles.container }}>
          <Hero
            content={`회원 가입하고${`\n`}새로운 경험을 시작하세요`}
            style={styles.hero}
          />

          <AuthForm
            isRegister
            isSubmitting={loading}
            onSubmit={onSubmit}
            inputAccessoryId={INPUT_ACCESSORY_ID}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
