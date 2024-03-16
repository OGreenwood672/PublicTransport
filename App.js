import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Pages/HomeScreen';
import RewardsScreen from './Pages/RewardsScreen';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          initialParams={{ username: 'Greenwood' }}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Rewards" component={ RewardsScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
