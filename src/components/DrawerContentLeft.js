import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Add from '../assets/images/add.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  { id: '1', title: 'Voltroph' },
  { id: '2', title: 'Deepak' },
  { id: '3', title: 'Meena' },
  { id: '4', title: 'ToDo' },
];

export default function DrawerContentLeft({ navigation }) {
  return (
    <View style={styles.drawer_con}>
      {/* <LinearGradient
        colors={['#7289da', '#424549', 'transparent']}
        style={styles.drawer_header}
      >
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Bold' }}>
          Disorder
        </Text>
      </LinearGradient> */}

      <View style={styles.drawer_nav_container}>
        <View style={styles.drawer_nav}>
          <FlatList
            data={data}
            keyExtractor={data => data.id}
            renderItem={({ item }) => {
              return (
                <DrawerItem
                  style={{ width: 55 }}
                  label={''}
                  onPress={() => {}}
                  icon={({ focused, color, size }) => (
                    <Image
                      source={item.image ? item.image : Add}
                      style={{
                        borderRadius: 20,
                        backgroundColor: '#ddd',
                        width: 40,
                        height: 40,
                        overflow: 'hidden',
                        borderColor: '#ddd',
                        borderWidth: 0.5,
                      }}
                    />
                  )}
                  // labelStyle={{
                  //   width: 90,
                  //   marginLeft: -20,
                  //   fontSize: 15,
                  //   fontWeight: 'bold',
                  //   textAlign: 'left',
                  //   backgroundColor: '#424549',
                  //   padding: 8,
                  //   color: 'white',
                  //   borderTopLeftRadius: 5,
                  //   borderTopRightRadius: 5,
                  //   borderBottomLeftRadius: 5,
                  //   borderBottomRightRadius: 5,
                  // }}
                />
              );
            }}
          />
        </View>
        <View style={styles.drawer_nav_contant}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer_con: {},
  drawer_header: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight * 0.15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  drawer_nav_container: {
    flexDirection: 'row',
  },
  drawer_nav: {
    width: 70,
  },
  drawer_nav_contant: {
    width: windowWidth * 0.8 - 80,
    backgroundColor: '#424549',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
