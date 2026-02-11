import { Text, StyleSheet } from 'react-native'

const AppText = ({children, variant="body", style}) => {
  return (
    <Text style={[styles[variant], style]}>
        {children}
    </Text> 
  );
};

export default AppText

const styles= StyleSheet.create({
    body:{
        fontSize:14,
        color:"#E5E7EB",
    },
    title:{
        fontSize:22,
        fontWeight:"800",
        color:"#FFFFFF",
        letterSpacing:0.5,
    },
    subtitle:{
        fontSize:13,
        color:"#9CA3AF",
    },
    bold:{
        fontSize:18,
        fontWeight:"700",
        color:"#FFFFFF"
    },
})