import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Cell, CustomButton, Field, ShipBlock} from '../components';
import {emptyField} from '../core/field';

export function FieldSettings({navigation}) {
   const [field, setField] = useState(emptyField);
   const [oneShipCount, setoneShipCount] = useState(4);
   const [twoShipCount, setTwoShipCount] = useState(3);
   const [threeShipCount, setThreeShipCount] = useState(2);
   const [fourShipCount, setFourShipCount] = useState(1);

   const {main, content, ships, fieldStyle, buttonsStyle} = styles;

   return (
      <View style={main}>
         <View style={content}>
            <View style={ships}>
               <ShipBlock shipSize={1} count={oneShipCount} />
               <ShipBlock shipSize={2} count={twoShipCount} />
               <ShipBlock shipSize={3} count={threeShipCount} />
               <ShipBlock shipSize={4} count={fourShipCount} />
            </View>
            <View style={buttonsStyle}>
               <CustomButton text={'Cancel'} handler={() => navigation.goBack()} />
               <CustomButton text={'Start'} handler={() => navigation.navigate('Game', {field})} />
            </View>
         </View>
         <View style={fieldStyle}>
            <Field field={field} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   main: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
   },
   content: {
      width: '49%',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   ships: {
      width: '60%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 40,
   },
   buttonsStyle: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   fieldStyle: {
      width: Dimensions.get('window').height - 70,
      height: Dimensions.get('window').height - 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
   },
});
