import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RegisterScreen = () => {
  const bottom = useSafeAreaInsets().bottom;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ paddingBottom: bottom, ...styles.container }}>
        <Hero
          content={`회원 가입하고${`\n`}새로운 경험을 시작하세요`}
          style={{ paddingTop: 20 }}
        />
        <AuthForm isRegister />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, flex: 1 },
});
