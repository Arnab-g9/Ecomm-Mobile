import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/screens/Splash';
import {GlobalStyles} from './src/constants/GlobalStyles';
import Signup from './src/screens/Signup';

const App = () => {
  return (
    <View style={[GlobalStyles.container]}>
      {/* <Splash /> */}
      <Signup />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
