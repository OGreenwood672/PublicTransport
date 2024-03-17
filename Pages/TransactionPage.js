import { View, Text, StyleSheet } from "react-native";



export default function TransactionPage({ route, navigate }) {

    const styles = StyleSheet.create({
        container: {
            margin: 20,
        },
        title: {
            fontSize: 30,
            fontWeight: "bold"
        },
        row: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        date: {
            marginLeft: 5,
            fontSize: 20,
        },
        cost: {
            fontSize: 20,
            marginRight: 10,
        },
        
    })

    function getType(cost) {
        if (cost < 5) {
            return "scooter"
        } else if (cost < 10) {
            return "bus";
        } else if (cost < 50) {
            return "train";
        }
        return "plane";
    }

    function getDistance(cost, type) {
        const travel_factor = {"scooter": 1, "bus": 2, "train": 3, "plane": 18}
        return travel_factor[type] * cost;
    }

    function getCarbonSaved(distance, type) {
        const avgCarbonPerMile = 0.05;
        const peopleSaved = {"scooter": 1, "bus": 29, "train": 700, "plane": 175}
        return peopleSaved[type] * avgCarbonPerMile;

    }

    const type = getType(route.params.cost);
    const distance = getDistance(route.params.cost, type);
    const carbonSaved = getCarbonSaved(distance, type);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction Details</Text>
            <View style={styles.row}>
                <Text style={styles.date}>{route.params.details.date}</Text>
                <Text style={styles.cost}>£{route.params.details.cost}</Text>
            </View>





        </View>
    )

}