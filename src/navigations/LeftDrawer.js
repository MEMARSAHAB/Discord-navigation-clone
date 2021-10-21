import React from 'react';
import { View, Dimensions } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import MainScreens from './MainStack';
import DrawerContentLeft from '../components/DrawerContentLeft';

const windowWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContentLeft {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'back',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#23272a',
          width: windowWidth * 0.8,
        },
        overlayColor: 'null',
        sceneContainerStyle: '#23272a',
      }}
    >
      <Drawer.Screen name='MainScreens' component={MainScreens} />
    </Drawer.Navigator>
  );
};
