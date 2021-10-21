import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';

import * as firebase from 'firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({ navigation }) {
  const [today, setToday] = useState(new Date());

  const weekRef = useRef();

  const db = firebase.firestore();

  // db.collection('todos').doc('deepak', `${date}`).set({
  //   email: currentUser.email,
  //   lastName: lastName,
  //   firstName: firstName,
  // });

  const setdata = date => {
    db.collection('rooms')
      .doc('roomA')
      .collection('messages')
      .doc('message1')
      .set({
        email: 'deepak',
        lastName: 'Meena',
        firstName: 'Ankit',
      });
  };

  return (
    <View style={styles.header_row}>
      <CalendarStrip
        ref={weekRef}
        calendarAnimation={{ type: 'sequence', duration: 2000 }}
        scrollable={true}
        style={{
          height: 90,
          paddingTop: 10,
          paddingBottom: 0,
          position: 'relative',
        }}
        calendarHeaderStyle={{ color: 'black' }}
        calendarColor={'#fff'}
        dateNumberStyle={{ color: 'tomato' }}
        dateNameStyle={{ color: 'tomato' }}
        highlightDateContainerStyle={{ backgroundColor: 'red' }}
        highlightDateNameStyle={{ color: 'white' }}
        highlightDateNumberStyle={{ color: 'white' }}
        iconLeft={null}
        iconRight={null}
        selectedDate={today}
        onDateSelected={date => {
          setToday(date);
          setdata(date);
        }}
        onHeaderSelected={() => {
          weekRef.current.updateWeekView(new Date());
        }}
        styleWeekend
        weekendDateNameStyle={{ color: '#ddd' }}
        weekendDateNumberStyle={{ color: '#ddd' }}
      />
      <View style={styles.header_top}>
        <TouchableOpacity
          style={styles.header_left}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Octicons name='location' size={25} color='gray' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.header_right}
          onPress={() => {
            navigation.getParent().getParent().openDrawer();
          }}
        >
          <AntDesign name='user' size={25} color='gray' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_row: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  header_top: {
    width: windowWidth * 0.97,
    position: 'absolute',
    top: 0,
    left: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_left: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_right: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
