import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export function OneShip() {
   const {main} = styles;
   return <View style={main}></View>;
}

const styles = StyleSheet.create({
   main: {
      height: (Dimensions.get('window').height - 80) / 10,
      width: (Dimensions.get('window').height - 80) / 10,
      borderColor: 'red',
      borderWidth: 2,
   },
});
