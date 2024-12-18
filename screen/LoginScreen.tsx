import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Container, Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";

const LoginScreen = () => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Hero
            content={`환영합니다!${`\n`}로그인 후 시작하세요`}
            style={styles.hero}
          />
          <AuthForm />
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
    paddingTop: 60,
  },
});
