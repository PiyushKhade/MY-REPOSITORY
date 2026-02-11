import { Text, TouchableOpacity, StyleSheet } from 'react-native'


const AppButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.85}
    onPress={onPress}
    disabled={disabled}
    style={[
        styles.button,
        disabled && styles.disabledButton,
      ]}
    >
        <Text 
        style={[
          styles.text,
          disabled && styles.disabledText,
        ]}
        >{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
     button: {
    minWidth: 90,                 
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#F97316",   
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: "#374151",
  },
  text: {
    color: "#FFFFFF",             
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  disabledButton: {
    backgroundColor: "#374151",
  },

  disabledText: {
    color: "#9CA3AF",
  },
})