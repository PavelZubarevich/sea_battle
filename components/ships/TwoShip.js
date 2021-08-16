import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export function TwoShip() {
   const {main} = styles;
   return <View style={main}></View>;
}

const styles = StyleSheet.create({
   main: {
      height: (Dimensions.get('window').height - 80) / 5,
      width: (Dimensions.get('window').height - 80) / 10,
      borderColor: 'red',
      borderWidth: 2,
   },
});
