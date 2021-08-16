import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export function CustomButton({text, handler, style}) {
   const {main, textStyle} = styles;
   return (
      <TouchableOpacity style={[main, style]} onPress={handler}>
         <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   main: {
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      backgroundColor: '#ccc',
   },
   textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#000',
   },
});

CustomButton.propTypes = {
   text: PropTypes.string,
   handler: PropTypes.func,
};
