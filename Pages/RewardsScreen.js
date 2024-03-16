
import { useState } from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/button";

import rewards from "../assets/rewards.json"

const images = {
    merch1: require("../assets/merch1.png")
}

function getRewards(category) {

    for (let i=0; i<rewards.length; i++) {

        if (category == "All" || rewards["genre"] == category) {



        }

    }

    let filterRewards = rewards.filter(reward => category == "All" || reward["genre"] == category);
    // return (
    //     {filterRewards.map((genre, index) => (

    //     ))}
    // )

}

export default function RewardsScreen({ route, navigation }) {

    const [tab, setTab] = useState("Merch");

    const styles = StyleSheet.create({

        scroll_container: {
            flexGrow: 1,
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

    });

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