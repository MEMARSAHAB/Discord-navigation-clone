import React, { useEffect, useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';

import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#ddd',
      }}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
        <Text>Result</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
