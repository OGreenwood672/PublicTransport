
import { useState } from "react";
import { Text, ScrollView, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Button from "../components/button";

import rewards from "../assets/rewards.json"
import TabBar from "../components/tabbar";

const images = {
    "1": require("../assets/1.png"),
    "2": require("../assets/2.png"),
    "3": require("../assets/3.png"),
}

const styles = StyleSheet.create({

    scroll_container: {
        alignItems: 'center',
        flexGrow: 1,
    },

    title: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 32,
        fontWeight: "bold",
    },

    tabs: {
        flexDirection: "row",
        width: "100%",
    },

    tab: {
        marginLeft: 2,
    },

    reward: {
        margin: 10,
        height: 250,
        borderWidth: 10,
        borderRadius: 10,
        backgroundColor: "black",
    },

    images: {
        width: 370,
        height: "80%",
    },

    info: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 7,
        marginLeft: 5,
        marginRight: 5,
    },

    info_text: {
        color: "white",
        fontSize: 20,
    },

    whole_container: {
        flex: 1,
        justifyContent: 'flex-start',
        position: "relative",
        // height: "100%",
    },
    absolute_container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
    }

});

function toPay(price, name, walletAddress, navigation) {

    navigation.navigate("Payment", {price: price, name: name, walletAddress: walletAddress});

}

function getRewards(category, name, walletAddress, navigation) {

    let filterRewards = rewards.filter(reward => (category == "All" || reward["genre"] == category));
    return (
        <View>
            <View style={{margin: 10,}}/>
            {filterRewards.map(({ _, DisplayName, price, id }) => (
                <TouchableOpacity key={id} onPress={() => toPay(price, name, walletAddress, navigation)}>
                    <View style={styles.reward}>
                        <Image style={styles.images} source={images[`${id}`]} />
                        <View style={styles.info}>
                            <Text style={styles.info_text}>{DisplayName}</Text>
                            <Text style={styles.info_text}>CCC {price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

}

export default function RewardsScreen({ route, navigation }) {

    const [tab, setTab] = useState("Merch");

    function getTabBar() {

        return (
            <ScrollView horizontal={true} style={styles.tabs}>

                <View style={styles.tab}>
                    {Button("All", "white", "black", 100, 50,
                    () => setTab("All"))}
                </View>

                <View style={styles.tab}>
                    {Button("Merch",  "white", "black", 100, 50,
                    () => setTab("Merch")
                    )}
                </View>
                <View style={styles.tab}>
                    {Button("Holidays", "white", "black", 100, 50,
                    () => setTab("Holidays"))}
                </View>
                <View style={styles.tab}>
                    {Button("Discounts", "white", "black", 100, 50,
                    () => setTab("Discounts"))}
                </View>

                <View style={styles.tab}>
                    {Button("Vouchers", "white", "black", 100, 50,
                    () => setTab("Vouchers"))}
                </View>

            </ScrollView>
        )
    }
    
    return (
        <View style={styles.whole_container}>
            <ScrollView contentContainerStyle={styles.scroll_container}>

                <View style={{marginTop: 40}} />


                <Text style={styles.title}>Explore EcoNex Rewards!</Text>

                {getTabBar()}

                {getRewards(tab, route.params.name, route.params.walletAddress, navigation)}

                <View style={{marginBottom: 100}} />

            </ScrollView>
            <View style={styles.absolute_container}>
                {TabBar(navigation, route.params.name, route.params.walletAddress)}
            </View>
        </View>
    )

};