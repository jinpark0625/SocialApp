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
import { useAuth } from "@/hooks";
import { router } from "expo-router";

const RegisterScreen = () => {
  const INPUT_ACCESSORY_ID = "nickname";
  const bottom = useSafeAreaInsets().bottom;
  const { signIn } = useAuth();

  const onSubmit = async () => {
    await signIn();
    router.replace("/(app)/(tabs)");
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
