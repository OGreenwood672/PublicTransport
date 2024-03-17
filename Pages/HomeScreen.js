
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper'; 

import Button from "../components/button";


import data from "../assets/backend.json";


function getTransactionTable(details, navigation) {

    if ("history" in details && details["history"].length > 0) {
        return (
            <View style={styles.table}>
                <Text style={styles.past_transactions}>Transaction History</Text>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Date</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Cost</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Points</DataTable.Cell>
                </DataTable.Row>
                {details["history"].map((history, index) => (
                    <TouchableOpacity key={index} onPress={() => {navigation.navigate("Transaction", {details: history})}}>
                        <DataTable.Row style={styles.row}>
                            <DataTable.Cell style={styles.row_item}>{history["date"]}</DataTable.Cell>
                            <DataTable.Cell style={styles.row_item}>£{history["cost"]}</DataTable.Cell>
                            <DataTable.Cell style={styles.row_item}>{history["points"]}</DataTable.Cell>
                        </DataTable.Row>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

function getDetails(name) {

    for (let i=0; i<data.length; i++) {
        if (data[i]["name"] == name) {
            return data[i];
        }
    }
    return {
        "points": 0
    }

}

export default HomeScreen = ({ route, navigation }) => {

    details = getDetails(route.params.name);

    return (
        <View style={styles.whole_container}>
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={{marginTop: 20}}>Hey,</Text>
                <Text style={styles.name}>{route.params.name}</Text>

                <View style={styles.cool_container}>                    
                    <View style={{flexDirection: "row"}}>

                        <View>
                            <Text>Coin Balance</Text>
                            <Text style={styles.heading}>CCC: {details["points"]}</Text>

                        </View>
                        <Image style={styles.logo} source={require("../assets/logo.png")} />
                    </View>
                </View>

                <View style={[styles.data_box, styles.cool_container]}>

                    <View style={styles.sub_data_box}>
                        <Text>Total Earned</Text>
                        <Text>^ 4.5%</Text>
                    </View>
                    <View style={styles.sub_data_box}>
                        <Text>Total Spent</Text>
                        <Text>:( 3.5%</Text>
                    </View>

                </View>

                <View style={styles.cool_container}>
                    {getTransactionTable(details, navigation)}
                </View>

            </ScrollView>
            <View style={styles.absolute_container}>
                {Button(
                    "Rewards",
                    "white",
                    "black",
                    110,
                    65,
                    () => navigation.navigate('Rewards', { walletAddress: route.params.walletAddress })
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    table: {
        alignItems: "center",
        width: "100%",
    },
    past_transactions: {
        fontSize: 30,
        padding: 10,
    },
    header: {
        padding: 10,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        width: "100%",
    },
    row_item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },


    name: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
    },
    cool_container: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        width: "85%",
        marginBottom: 15,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
    },
    logo: {
        marginLeft: "30%",
        right: 18,
        width: 58,
        height: 52
    },


    data_box: {
        flexDirection: "row",
        justifyContent: "space-around",
    },


    sub_data_box: {
        borderRadius: 1,
        alignItems: "center",
    },

    whole_container: {
        flex: 1,
        justifyContent: 'flex-start',
        position: "relative"
    },
    absolute_container: {
        position: "aboslute",
        bottom: 40,
        left: "68%",
    }
})