/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {NativeBaseProvider, theme} from 'native-base';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/Components/Routes';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#141e2b"
          // translucent={true}
        />

        <Routes />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
