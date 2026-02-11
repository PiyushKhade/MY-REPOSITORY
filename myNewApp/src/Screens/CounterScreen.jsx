import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#4f46e5",
    borderRadius: 6,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  navBtn: {
    marginTop: 20,
  },
  navText: {
    color: "#2563eb",
    fontSize: 16,
  },
  countText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default function CounterScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const {logout} = useContext(AuthContext); 

  const handleLogout=()=>{
    logout();
    alert("Logged out")
  }

  return (
    <View style={styles.container}>
      <TextInput  mode="outlined"
        label={"Type here"}
        placeholder="type something"
        right={<TextInput.Icon icon={'eye'}/>}
        style={{width:"80%"}}/>
      <Text style={styles.title}>Counter Screen</Text>

      <Text style={[
        styles.countText,
        { color: count > 4 ? "green" : "black" },
      ]}>{count}</Text>

      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
        >
          <Text style={styles.btnText}>-</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.navBtn}
        onPress={() => navigation.navigate("Details", { count })}
      >
        <Text style={styles.navText}>Go to Details</Text>
      </Pressable>

      <Pressable
        style={styles.navBtn}
        onPress={handleLogout}
      >
        <Text style={styles.navText}>👉Log Out</Text>
      </Pressable>

      
    </View>
  );
}
