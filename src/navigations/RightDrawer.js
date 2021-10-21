import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { View } from 'react-native';

import LeftDrawer from './LeftDrawer';

const Drawer = createDrawerNavigator();

export default ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerComp {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'back',
        headerShown: false,
      }}
    >
      <Drawer.Screen name='LeftDrawer' component={LeftDrawer} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = props => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2 }}>
        <DrawerItem
          label='Right Drawer'
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
