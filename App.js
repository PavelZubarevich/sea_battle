import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Menu, FieldSettings, Game} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="FieldSettings" component={FieldSettings} />
            <Stack.Screen name="Game" component={Game} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
