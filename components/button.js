
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button(text, textColour, backgroundColour, width, height, fn) {

    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            backgroundColor: backgroundColour,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: textColour,
            fontSize: 15,
            textAlign: "center"
        }
    });

    return (
        <TouchableOpacity onPress={fn}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>

    )

}