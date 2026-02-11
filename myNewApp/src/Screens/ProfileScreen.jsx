import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import {Feather} from '@expo/vector-icons';
import MenuItem from '../components/MenuItem';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


export default function ProfileScreen({navigation}) {
  const {logout, user} = useContext(AuthContext)
  const handleLogout=()=>{
    logout();
    alert("Logged out")
    console.log("Logged Out")
  }

  return (
    
    <ScrollView style={styles.container}>
     
      <View style={styles.profileRow}>
        <View style={{ position: "relative" }}>
          <Image
            style={styles.profileImage}
            source={
              user?.profileImage
                ? { uri: user.profileImage }
                : require('../../assets/profilepic.png')
            }
          />
          <View style={styles.cameraIcon}>
            <Feather name="camera" size={14} color="#fff" />
          </View>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{user?.name || "No Name"}</Text>
          <Text style={styles.username}>@{user?.username}</Text>
          <Button
          style={styles.editBtn}
            mode='contained'
            onPress={()=>navigation.navigate("EditProfile")}>
            Edit Profile
          </Button>
        </View>
      </View>

      <View style={styles.menu}>
        <MenuItem icon={"heart-outline"} label={"Favourites"}/>
        <MenuItem icon="download-outline" label="Downloads" />
        <MenuItem icon="language-outline" label="Language" />
        <MenuItem icon="location-outline" label="Location" />
        <MenuItem icon="card-outline" label="Subscription" />
        <MenuItem icon="trash-outline" label="Clear cache" />
        <MenuItem icon="time-outline" label="Clear history" />
        <MenuItem icon="log-out-outline" label="Log out" danger onPress={handleLogout} />

      </View>

    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding:20,
    height:"100%" 
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:25
  },
  headerTitle:{
    fontSize: 18,
    fontWeight: "600",
  },
  profileRow:{
    flexDirection:"row",
    gap:10,
    marginBottom:20
  },
  profileImage:{
    width: 100,
    height: 100,
    borderRadius:50
  },
  cameraIcon:{
    position:"absolute",
    backgroundColor:"#000",
    bottom:0,
    right:0,
    padding:6,
    borderRadius:20
  },
  profileInfo:{
    marginLeft:15,
    justifyContent:"center",
    // alignItems:"center"
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  username: {
    color: "#6b7280",
    marginBottom: 10,
  },
  editBtn:{
    borderRadius:8,
    alignSelf:"flex-start"
  },
  menu: {
    marginTop: 10,
  },

});


