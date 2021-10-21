import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import HomeScreen from '../screens/Home';


const MainStack = createStackNavigator();

export default function MainScreens() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
    </MainStack.Navigator>
  );
}
