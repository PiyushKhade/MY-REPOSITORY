import { View, StyleSheet } from 'react-native'


const AppCard = ({ children, style }) => {
  return (
     <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    padding:16,
    borderRadius: 14,
    marginBottom: 16,
  },
});