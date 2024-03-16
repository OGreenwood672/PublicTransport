
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Pages/HomeScreen';
import RewardsScreen from './Pages/RewardsScreen';
import ConnectWalletPage from './Pages/ConnectWalletPage';
import ChooseCar from './Pages/ChooseCar';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Information" component={ ConnectWalletPage } />
        <Stack.Screen name="Choose Car" component={ ChooseCar } />
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
        />
        <Stack.Screen name="Rewards" component={ RewardsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
