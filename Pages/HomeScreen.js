
import { ScrollView, View, Text, Button, Image, StyleSheet } from "react-native"


export default HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/pfp.png')}
                style={styles.pfp}
            />

            <Text style={styles.name}>Greenwood</Text>

            <Text style={styles.points}>0 Points</Text>

            <Button
                title="Rewards ->"
                style={styles.rewards}
                onPress={() =>
                    navigation.navigate('Rewards', { name: 'Jane' })
                }
            />

            <Text style={styles.past_transactions}>Transaction History</Text>

            
            <View style={styles.row}>
                <Text style={styles.row_item}>Date</Text>
                <Text style={styles.row_item}>Cost</Text>
                <Text style={styles.row_item}>Type</Text>
                <Text style={styles.row_item}>Carbon Saved</Text>
                <Text style={styles.row_item}>Points Earned</Text>
            </View>

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
    past_transactions: {
        fontSize: 30,
        padding: 20,
    },
    row: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-evenly",
        backgroundColor: "#43DEC9",
        borderRadius: 5,
    },
    row_item: {
        padding: 10,
    },
    footer: {
        marginBottom: 50,
    }
})