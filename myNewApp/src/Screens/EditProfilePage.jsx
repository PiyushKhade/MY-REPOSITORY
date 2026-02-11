import { View, Text, StyleSheet, ScrollView, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useContext, useEffect, useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

export default function EditProfilePage({ navigation }) {
  const { user, userToken, setUser } = useContext(AuthContext)

  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "")
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobile || "");
  const [profileImage, setProfileImage] = useState(user?.profileImage || "");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Permission required to access gallery");
      }
    })();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      setMobile(user.mobile || "");
      setProfileImage(user.profileImage || "");
    }
  }, [user]);

  const saveProfile = async () => {
    try {
      const res = await api.put(
        `/auth/profile`,
        { name, username, mobile },
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      )

      setUser(res.data);
      alert("Profile Updated Successfully");
      navigation.goBack();
    } catch (error) {
      console.log(error.response?.data || error.message)
      alert("Failed To Update");
    }
  }

  const pickImage = async () => {
    try {
      console.log("Picker start");

      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        alert("Gallery permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      console.log("Picker result:", result);

      if (!result.canceled) {
        uploadImage(result.assets[0]);
      }
    } catch (err) {
      console.log("Picker crash:", err);
      alert("Picker failed");
    }
  };

  const uploadImage = async (image) => {

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", {
        uri: image.uri,
        name: "profile.jpg",
        type: "image/jpeg",
      });

      const res = await api.put(
        "/auth/profile/image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser(res.data);
      setProfileImage(res.data.profileImage);
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1
        }}>

        <SafeAreaView>
          {/* HEADER */}
          <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
            <Text style={styles.headerTitle}>Edit Profile</Text>
            <Feather name="check" size={22} onPress={!uploading ? saveProfile : null} />
          </View>

          {/* PROFILE INFO */}
          <View style={styles.profileRow}>
            <View style={styles.imageWrapper}>
              <Pressable onPress={pickImage}>
                <Image
                  source={
                    profileImage
                      ? { uri: profileImage }
                      : require("../../assets/profilepic.png")
                  }
                  style={styles.profileImage}
                />

                <Pressable style={styles.cameraIcon}>
                  <Ionicons name="camera" size={14} color="#fff" />
                </Pressable>
              </Pressable>
            </View>
          </View>

          {/* Edit Form */}
          <View style={styles.formView}>
            <View style={styles.textInputView}>
              <Text style={styles.lableText}>Name</Text>
              <TextInput placeholder='Name' 
              style={styles.textInput} 
              value={name} 
              onChangeText={setName} 
              />
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.lableText}>Email Address</Text>
              <TextInput 
              placeholder='Email Address' 
              style={styles.textInput} 
              value={email} 
              editable={false} 
              />
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.lableText}>Username</Text>
              <TextInput 
              placeholder='Username' 
              style={styles.textInput} 
              value={username} 
              onChangeText={setUsername} 
              />
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.lableText}>Phone Number</Text>
              <TextInput 
              placeholder='Phone Number' 
              style={styles.textInput} 
              value={mobile} 
              onChangeText={setMobile} 
              />
            </View>

          </View>
        </SafeAreaView>
        
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    height: "100%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    marginTop: 18
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
  profileRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  cameraIcon: {
    position: "absolute",
    backgroundColor: "#000",
    bottom: 0,
    right: 0,
    padding: 6,
    borderRadius: 20
  },
  formView: {
    padding: 5
  },
  textInputView: {
    marginBottom: 5,
    gap: 10
  },
  lableText: {
    fontSize: 18,
    fontWeight: 500
  },
  textInput: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10

  }

})
