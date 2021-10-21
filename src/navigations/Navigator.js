import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RightDrawer from './RightDrawer';

import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import ResultScreen from '../screens/Result';
import CartScreen from '../screens/Cart';

// import HouseScreen from '../screens/Home';
// import ShopScreen from '../screens/Shop';
// import ProfileScreen from '../screens/Profile';
// import SearchScreen from '../screens/Search';
// import ResultScreen from '../screens/Result';
// import LocationScreen from '../screens/Location';
// import CartScreen from '../screens/Cart';
// import Login from '../screens/Login';
// import OtpVerify from '../screens/OtpVerify';
// import Header from '../components/Header';
// import LocationHeader from '../components/LocationHeader';
// import HomeScreen from '../screens/Home';

// // function Authstack() {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName='Login'
// //       screenOptions={{
// //         headerShown: false,
// //       }}
// //     >
// //       <Stack.Screen name='Login' component={Login} />
// //       <Stack.Screen name='OtpVerify' component={OtpVerify} />
// //     </Stack.Navigator>
// //   );
// // }

// // const BottomTab = createBottomTabNavigator();

// // function BottomTabStack() {
// //   return (
// //     <BottomTab.Navigator
// //       initialRouteName='Home'
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color, size }) => {
// //           let iconName;

// //           if (route.name === 'Home') {
// //             iconName = focused ? 'home-minus' : 'home-minus-outline';
// //           } else if (route.name === 'Shop') {
// //             iconName = focused ? 'shopping' : 'shopping-outline';
// //           }

// //           // You can return any component that you like here!
// //           return (
// //             <MaterialCommunityIcons name={iconName} size={size} color={color} />
// //           );
// //         },
// //       })}
// //       tabBarOptions={{
// //         activeTintColor: 'tomato',
// //         inactiveTintColor: 'gray',
// //       }}
// //     >
// //       <BottomTab.Screen name='Home' component={HouseScreen} />
// //       <BottomTab.Screen name='Shop' component={ShopScreen} />
// //     </BottomTab.Navigator>
// //   );
// // }

// const MainScreens = createStackNavigator();

// function MainStack() {
//   return (
//     <MainScreens.Navigator>
//       <MainScreens.Screen
//         name='HomeScreen'
//         component={HomeScreen}
//         options={{
//           header: ({ navigation }) => <Header navigation={navigation} />,
//         }}
//       />
//       <MainScreens.Screen name='SearchScreen' component={SearchScreen} />
//       <MainScreens.Screen name='ResultScreen' component={ResultScreen} />
//       <MainScreens.Screen name='CartScreen' component={CartScreen} />
//       <MainScreens.Screen name='ProfileScreen' component={ProfileScreen} />
//     </MainScreens.Navigator>
//   );
// }

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <SafeAreaProvider>
      <SafeAreaView />
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: { ...DarkTheme.colors, background: '#23272a' },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='RightDrawer'
            component={RightDrawer}
          />

          <Stack.Screen name='SearchScreen' component={SearchScreen} />
          <Stack.Screen name='ResultScreen' component={ResultScreen} />
          <Stack.Screen name='CartScreen' component={CartScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
