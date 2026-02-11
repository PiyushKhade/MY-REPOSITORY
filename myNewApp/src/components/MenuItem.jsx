import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function MenuItem({ icon, label, danger, onPress }) {
    return (

        <Pressable style={styles.menuItem}
            onPress={onPress}
            android_ripple={{ color: "#e5e7eb" }}>
            <View style={styles.menuLeft}>
                <Ionicons
                    name={icon}
                    size={24}
                    color={danger ? "#ef4444" : "#111"}
                />
                <Text style={[styles.menuText, danger && { color: "ef4444" }]}>{label}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#9ca3af" />
        </Pressable>

    )
}

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#f3f4f6"
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    menuText: {
        fontSize: 18
    }
})