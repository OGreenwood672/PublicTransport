
import { Text } from "react-native";


export default function RewardsScreen({ route, navigation }) {
    return <Text>This is { route.params.name }'s profile</Text>;
};