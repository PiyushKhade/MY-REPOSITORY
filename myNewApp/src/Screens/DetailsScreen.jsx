import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function DetailsScreen({ route }) {

  const { count } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen 🎉</Text>
      <Text style={styles.text}>{count}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});
