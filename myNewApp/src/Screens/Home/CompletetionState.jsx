import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CompletetionState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Done for today. Rest.</Text>
    </View>
  )
}

export default CompletetionState

const styles= StyleSheet.create({
  container:{
    marginTop:32,
    alignItems:"center",
  },
  text:{
    color:"#9CA3AF",
    fontSize:14,
    fontWeight:"500",
  }
})