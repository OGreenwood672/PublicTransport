
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function TabBar(nav, name, walletAddress) {

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 100,
            flexDirection: "row",
            backgroundColor: "black", 
        },
        button: {
            width: "50%",
            height: 70,
            alignItems: "center",
            justifyContent: 'center',
            flex: 1,
            borderTopWidth: 1,
            borderColor: "#FFFFFF",
        },
        item: {
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
        }
    });


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => nav.navigate("Home", { name: name, walletAddress: walletAddress })}>
                <Text style={styles.item}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {borderLeftWidth: 1}]} onPress={() => nav.navigate("Rewards", { name: name, walletAddress: walletAddress })}>
                <Text style={styles.item}>Rewards</Text>
            </TouchableOpacity>
        </View>
    )


}