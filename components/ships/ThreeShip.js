import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export function ThreeShip() {
   const {main} = styles;
   return <View style={main}></View>;
}

const styles = StyleSheet.create({
   main: {
      height: (Dimensions.get('window').height - 80) / 3.33,
      width: (Dimensions.get('window').height - 80) / 10,
      borderColor: 'red',
      borderWidth: 2,
   },
});
