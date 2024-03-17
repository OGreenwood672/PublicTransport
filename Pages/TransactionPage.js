import { View, Text, StyleSheet, Image } from "react-native";

const images = {
    "scooter": require("../assets/scooter.png"),
    "bus": require("../assets/bus.png"),
    "train": require("../assets/train.png"),
    "plane": require("../assets/plane.png"),
}


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
            margin: 2,
        },
        date: {
            marginLeft: 5,
            fontSize: 20,
        },
        cost: {
            fontSize: 20,
            marginRight: 10,
        },
        text: {
            fontSize: 17,
        },
        points_container: {
            alignItems: "center",
            margin: 30,
        },
        points: {
            fontSize: 30,
        },
        image: {
            width: 380,
            height: 350,
        }
        
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
        const travel_factor = {"scooter": 1, "bus": 2, "train": 3, "plane": 18};
        return travel_factor[type] * cost;
    }

    function getCarbonSaved(distance, type) {
        const avgCarbonPerMile = 0.5;
        const peopleSaved = {"scooter": 1, "bus": 29, "train": 700, "plane": 175};
        return peopleSaved[type] * avgCarbonPerMile * distance;

    }

    const type = getType(route.params.details.cost);
    const distance = getDistance(route.params.details.cost, type).toFixed(1);
    const carbonSaved = getCarbonSaved(distance, type).toFixed(1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction Details</Text>
            <View style={styles.row}>
                <Text style={styles.date}>{route.params.details.date}</Text>
                <Text style={styles.cost}>£{route.params.details.cost}</Text>
            </View>

            <View style={styles.points_container}>
                <Text style={styles.points}>Points Earned: {route.params.details.points}</Text>
            </View>

            <Image style={styles.image} source={images[`${type}`]} />

            <View style={styles.row}>
                <Text style={styles.text}>Estimated Distance Travelled:</Text>
                <Text style={styles.text}>{distance} miles</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Estimated Carbon Saved:</Text>
                <Text style={styles.text}>{carbonSaved} kg</Text>
            </View>


        </View>
    )

}