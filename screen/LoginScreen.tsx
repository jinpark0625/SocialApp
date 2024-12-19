import {
  View,
  Keyboard,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Container, Hero } from "@/componets/layout";
import { AuthForm } from "@/componets/sections";

const LoginScreen = () => {
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
    paddingTop: Platform.OS === "ios" ? 60 : 76,
  },
});
