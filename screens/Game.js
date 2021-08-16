import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity} from 'react-native';
import {Field} from '../components';

export function Game({route}) {
   const {field} = route.params;

   const [activePlayer, setPlayer] = useState(1);
   const arrowAnim = useRef(new Animated.Value(0)).current;

   const rotate = () => {
      setPlayer(prevState => (prevState === 1 ? 2 : 1));
      Animated.timing(arrowAnim, {
         toValue: activePlayer === 1 ? 1 : 0,
         duration: 400,
         useNativeDriver: true,
      }).start();
   };

   const {main, firstField, secondField, arrow} = styles;
   return (
      <View style={main}>
         <View style={firstField}>
            <Field field={field} />
         </View>
         <Animated.View
            style={[
               arrow,
               {
                  transform: [
                     {
                        rotateY: arrowAnim.interpolate({
                           inputRange: [0, 1],
                           outputRange: ['0deg', '180deg'],
                        }),
                     },
                  ],
               },
            ]}
         />

         <View style={secondField}>
            <Field field={field} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
   },
   firstField: {
      width: Dimensions.get('window').height - 70,
      height: Dimensions.get('window').height - 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
   },
   secondField: {
      width: Dimensions.get('window').height - 70,
      height: Dimensions.get('window').height - 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
   },
   arrow: {
      width: 40,
      height: 40,
      borderLeftColor: 'green',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftWidth: 40,
      borderTopWidth: 20,
      borderBottomWidth: 20,
      borderRightWidth: 0,
   },
});
