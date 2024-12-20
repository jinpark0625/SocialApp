import {
  View,
  Keyboard,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";
import { useAuth } from "@/hooks";
import { router } from "expo-router";

const LoginScreen = () => {
  const INPUT_ACCESSORY_ID = "password";
  const { signIn } = useAuth();

  const onSubmit = async () => {
    await signIn();
    router.replace("/(app)/(tabs)");
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
          <AuthForm onSubmit={onSubmit} inputAccessoryId={INPUT_ACCESSORY_ID} />
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
