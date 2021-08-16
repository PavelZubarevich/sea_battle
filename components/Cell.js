import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export function Cell({params}) {
   const {main} = styles;
   return <View style={main}></View>;
}

const styles = StyleSheet.create({
   main: {
      width: (Dimensions.get('window').height - 81) / 10,
      height: (Dimensions.get('window').height - 81) / 10,
      borderColor: '#555',
   },
});
