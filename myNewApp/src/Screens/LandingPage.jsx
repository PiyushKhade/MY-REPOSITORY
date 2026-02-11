import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const LandingPage = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>

                <Image style={styles.image} source={require("../../assets/about.png")}
                    resizeMode='contain' />
 

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Your complete CRM, right in your pocket.
                    </Text>

                    <Text style={styles.subtitle}>
                        Manage your leads, contacts, and deals anytime, anywhere from your mobile.
                    </Text>
                </View>

                <View style={styles.btnContainer}>
                    <Button
                        mode='contained'
                        style={styles.button}
                        onPress={() => navigation.navigate("Login")}><Text>Login</Text></Button>
                    <Button
                        mode='outlined'
                        style={styles.button}
                        onPress={() => navigation.navigate("Signup")}><Text>Signup</Text></Button>
                </View>
            </View>
        </>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "space-between",
    },
    btnContainer: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: 10
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#9900cc",
        marginBottom: 20,
    },
    button: {
        borderRadius: 8,
        width: "100%"
    },
    textContainer: {
        alignItems: "center",
        paddingHorizontal: 10,
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        color: "#9900cc",
    },
    image: {
        marginTop: "15%",
        width: "100%",
        height: "250",
    },
})