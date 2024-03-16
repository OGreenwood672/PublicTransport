
import { ScrollView, View, Text, Button, Image, StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper'; 


import data from "../assets/backend.json";


function getTransactionTable(details) {

    if (details["history"].length > 0) {
        return (
            <View style={styles.table}>
                <Text style={styles.past_transactions}>Transaction History</Text>
                <DataTable.Header style={styles.row}>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Date</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Cost</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Type</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Carbon Saved</DataTable.Cell>
                    <DataTable.Cell style={[styles.row_item, styles.header]}>Points</DataTable.Cell>
                </DataTable.Header>
                {details["history"].map((history, index) => (
                    <DataTable.Row key={index} style={styles.row}>
                        <DataTable.Cell style={styles.row_item}>{history["date"]}</DataTable.Cell>
                        <DataTable.Cell style={styles.row_item}>{history["cost"]}</DataTable.Cell>
                        <DataTable.Cell style={styles.row_item}>{history["type"]}</DataTable.Cell>
                        <DataTable.Cell style={styles.row_item}>{history["carbon saved"]}</DataTable.Cell>
                        <DataTable.Cell style={styles.row_item}>{history["points"]}</DataTable.Cell>
                    </DataTable.Row>
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
    return null;

}

export default HomeScreen = ({ route, navigation }) => {

    details = getDetails(route.params.username);

    const imageName = details["name"];
    const imagePath = `../assets/Greenwood.png`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require(imagePath)}
                style={styles.pfp}
            />

            <Text style={styles.name}>{details["name"]}</Text>

            <Text style={styles.points}>{details["points"]} Points</Text>

            <Button
                title="Rewards ->"
                style={styles.rewards}
                onPress={() =>
                    navigation.navigate('Rewards', { name: details["name"] })
                }
            />

            {getTransactionTable(details)}

            <View style={styles.footer} />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    pfp: {
        borderRadius: 1000,
        width: 300,
        height: 300,
        marginTop: "30%",
    },
    name: {
        fontSize: 30
    },
    points: {
        fontSize: 15,
        marginBottom: 175
    },
    rewards: {
        color: "black",
        width: "10%",
    },
    table: {
        alignItems: "center",
    },
    past_transactions: {
        fontSize: 30,
        padding: 10,
        backgroundColor: "#43DEC9",
    },
    header: {
        padding: 10,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-evenly",
        // borderRadius: 5,
    },
    row_item: {
        // fontSize: 15,
        borderColor: "#000000",
    },
    footer: {
        marginBottom: 50,
    }
})