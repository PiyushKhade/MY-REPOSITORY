import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext)

  const handleEmailChange = (text) => {
    setEmail(text.replace(/\s/g, ""));
  }

  const handlePasswordChange = (text) => {
    setPassword(text.replace(/\s/g, ""));
  }

  const handleLogin = async () => {
    if (!email || !password) {
      alert("fill the inputs");
      return;
    }

    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      const token = res.data.token;
      await login(token);
      console.log("Token:", token)
      alert("Logged in successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Invalid email or password");
    }
  }
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Login Here</Text>

            <Text style={styles.subtitle}>
              Welcome Back!! You`ve been missed !
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                label={"Email"}
                mode='outlined'
                value={email}
                onChangeText={handleEmailChange}
                style={styles.input}
                autoCapitalize='none'
                keyboardType='email-address' />

              <TextInput
                label={"Password"}
                mode='outlined'
                right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)} />}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                style={styles.input}
                autoCapitalize='none' />
            </View>


            <Button
              mode='contained'
              style={styles.button}
              onPress={handleLogin}>
              Login
            </Button>

            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.loginText}>Dont have an account ?</Text>
            </Pressable>

            <Text style={styles.orText}>Or Continue With</Text>

            <View style={styles.socialRow}>
              <Pressable style={styles.iconBox}>
                <Ionicons name="logo-google" size={26} color="#000" />
              </Pressable>

              <Pressable style={styles.iconBox}>
                <FontAwesome name="facebook" size={26} color="#1877F2" />
              </Pressable>

              <Pressable style={styles.iconBox}>
                <Ionicons name="logo-apple" size={26} color="#000" />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#9900cc",
    textAlign: "center",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 25,
  },
  inputContainer: {
    gap: 12,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5
  },
  loginText: {
    marginTop: 15,
    textAlign: "center",
    marginBottom: 20,
    color: "#ff5722",
  },
  orText: {
    textAlign: "center",
    marginBottom: 10,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  }
})