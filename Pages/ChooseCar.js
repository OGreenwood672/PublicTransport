
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/button";


export default function ChooseCar({ route, navigation }) {

    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            margin: 20,
        },

        row: {
            flexDirection: "row",
            justifyContent: "space-around"
        },

        item: {
            margin: 10,
            justifyContent: 'center',
        }
    })

    return (
        <View style={{alignItems: "center"}}>

            <View style={{marginTop: 150}} />

            <Text style={styles.title}>Select Car Type</Text>

            <View style={styles.row}>
                <View style={styles.item}>
                {
                    Button(
                        "Sedan",
                        "white",
                        "black",
                        190,
                        75, 
                        () => {
                            navigation.navigate('Home', { name: route.params.name, walletAddress: route.params.walletAddress, vehicle: "Sedan"})
                        }
                    )
                }
                </View>
                <View style={styles.item}>
                {
                    Button(
                        "Truck",
                        "white",
                        "black",
                        190,
                        75, 
                        () => {
                            navigation.navigate('Home', { name: route.params.name, walletAddress: route.params.walletAddress, vehicle: "Truck"})
                        }
                    )
                }
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.item}>
                {
                    Button(
                        "Sport Car",
                        "white",
                        "black",
                        190,
                        75, 
                        () => {
                            navigation.navigate('Home', { name: route.params.name, walletAddress: route.params.walletAddress, vehicle: "Sport Car"})
                        }
                    )
                }
                </View>
                <View style={styles.item}>
                {
                    Button(
                        "Motorcycle",
                        "white",
                        "black",
                        190,
                        75, 
                        () => {
                            navigation.navigate('Home', { name: route.params.name, walletAddress: route.params.walletAddress, vehicle: "Motorcycle"})
                        }
                    )
                }
                </View>
            </View>

            
        </View>
    )

}