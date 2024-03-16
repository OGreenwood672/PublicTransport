import { View, Text, Button, Image, StyleSheet } from "react-native"



export default HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/pfp.png')}
                style={styles.pfp}
            />

            <Text style={styles.name}>Greenwood</Text>

            <Text style={styles.points}>0 Points</Text>

            <Button
                title="Rewards"
                style={styles.rewards} 
                onPress={() =>
                    navigation.navigate('Rewards', { name: 'Jane' })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 15
    },
    rewards: {
        marginTop: 150
    }
})