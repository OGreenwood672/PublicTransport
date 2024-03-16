
import { View } from "react-native";
import Button from "../components/button";


export default function ChooseCar({ route, navigation }) {

    return (
        <View style={{alignItems: "center"}}>

            {
                Button(
                    "Continue",
                    "white",
                    "black",
                    300,
                    50, 
                    () => {
                        navigation.navigate('Home', { name: route.params.name, walletAddress: route.params.walletAddress })
                    }
                )
            }
        </View>
    )

}