import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import firebase from 'firebase';
import Config from './src/constants/config';

firebase.initializeApp(Config);

import Navigator from './src/navigations/Navigator';

export default function App() {
  const [isFontLoaded, setISFontLoaded] = useState(false);

  useEffect(() => {
    async function loadfont() {
      await Font.loadAsync({
        'Bold': require('./src/assets/fonts/Montserrat-ExtraBold.otf'),
        'Medium': require('./src/assets/fonts/Montserrat-Medium.otf'),
        'Regular': require('./src/assets/fonts/Montserrat-Regular.otf'),
      });
      setISFontLoaded(true);
    }
    loadfont();
  }, []);

  return isFontLoaded ? <Navigator /> : <AppLoading />;
}
