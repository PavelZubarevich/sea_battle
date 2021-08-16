import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OneShip, TwoShip, ThreeShip, FourShip} from '../components/ships';

export function ShipBlock({count, shipSize}) {
   const renderShip = ship => {
      switch (ship) {
         case 1:
            return <OneShip />;
         case 2:
            return <TwoShip />;
         case 3:
            return <ThreeShip />;
         case 4:
            return <FourShip />;
      }
   };

   const {main, textStyle} = styles;
   return (
      <View style={main}>
         {renderShip(shipSize)}
         <Text style={textStyle}>{count}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   main: {
      alignItems: 'center',
   },
   textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
   },
});
