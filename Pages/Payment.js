
import { View, StyleSheet, Image } from "react-native";
import Button from "../components/button";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});


function pay(price, name, walletAddress, navigation) {

    //Sriram PAY HERE

    navigation.navigate("Rewards", { name: name, walletAddress: walletAddress })

}

export default function Payment({ navigation, route }) {


    return (
        <View style={styles.container}>
            {Button(`Confirm Payment of CCC${route.params.price}`, "white", "black", 200, 100, () => pay(route.params.price, route.params.name, route.params.walletAddress, navigation))}
        </View>
    )

}