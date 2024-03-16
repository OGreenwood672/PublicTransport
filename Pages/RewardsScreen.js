
import { useState } from "react";
import { Text, ScrollView, StyleSheet, View, Image } from "react-native";
import Button from "../components/button";

import rewards from "../assets/rewards.json"

const images = {
    "1": require("../assets/1.png")
}

const styles = StyleSheet.create({

    scroll_container: {
        // flexGrow: 1,
        alignItems: 'center',
    },

    title: {
        margin: 30,
        fontSize: 50,
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
        height: 190,
        borderWidth: 10,
        borderRadius: 10,
        backgroundColor: "black",
    },

    images: {
        width: 370,
        height: "75%",
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
    }

});

function getRewards(category) {

    let filterRewards = rewards.filter(reward => (category == "All" || reward["genre"] == category));
    return (
        <View>
            {filterRewards.map(({ _, DisplayName, price, id }) => (
                <View key={id} style={styles.reward}>
                    <Image style={styles.images} source={images[`${id}`]} />
                    {/* <Image style={styles.images} source={require("../assets/1.png")} /> */}
                    <View style={styles.info}>
                        <Text style={styles.info_text}>{DisplayName}</Text>
                        <Text style={styles.info_text}>CCC {price}</Text>
                    </View>
                </View>
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
        <ScrollView contentContainerStyle={styles.scroll_container}>

            <Text style={styles.title}>Explore Econex Rewards!</Text>

            {getTabBar()}

            {getRewards(tab)}


        </ScrollView>
    )

};