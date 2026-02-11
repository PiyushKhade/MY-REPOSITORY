import { KeyboardAvoidingView,Platform,Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';


const SignupScreen = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      alert("fill input properly");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/register", {
        email,
        password
      });
      console.log(res)
      alert("Account Created Successfully");
      navigation.navigate("Login")
    } catch (error) {
      const msg =
        error.response?.data?.message || "Something went wrong";
      alert(msg);
    }

  };


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

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Create an account so you can explore all the existing features.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            label={"Email"}
            mode='outlined'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType='email-address' />

          <TextInput
            label={"Password"}
            mode='outlined'
            secureTextEntry={!showPassword}
            right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)} />}
            autoCapitalize='none'
            style={styles.input}
            value={password}
            onChangeText={setPassword} />

          <TextInput
            label={"Confirm Password"}
            mode='outlined'
            secureTextEntry={!showPassword1}
            right={<TextInput.Icon icon={showPassword1 ? "eye-off" : "eye"}
              onPress={() => setShowPassword1(!showPassword1)} />}
            autoCapitalize='none'
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword} />
        </View>

        <Button
          mode='contained'
          style={styles.button}
          onPress={handleSignup}>
          Submit
        </Button>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Already have an account ?</Text>
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

export default SignupScreen

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
    fontSize: 14,
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