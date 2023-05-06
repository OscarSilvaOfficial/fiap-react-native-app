import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Signin} options={{ headerShown: false }}/>
        <Tab.Screen name="Cadastro" component={Signup} />
        <Tab.Screen name="Principal" component={Home} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}