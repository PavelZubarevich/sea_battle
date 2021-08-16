import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {CustomButton} from '../components';
import backgroundImage from '../assets/mainScreen.png';

export function Menu({navigation}) {
   const {main, backgroundImageStyle, content} = styles;
   return (
      <View style={main}>
         <ImageBackground source={backgroundImage} style={backgroundImageStyle} resizeMode="cover">
            <View style={content}>
               <CustomButton
                  text={'one player'}
                  handler={() => navigation.navigate('FieldSettings')}
                  style={{width: '25%'}}
               />
               <CustomButton
                  text={'two players'}
                  handler={() => navigation.navigate('FieldSettings')}
                  style={{width: '25%'}}
               />
            </View>
         </ImageBackground>
      </View>
   );
}

const styles = StyleSheet.create({
   main: {
      flex: 1,
   },
   backgroundImageStyle: {
      flex: 1,
      justifyContent: 'center',
   },
   content: {
      height: '35%',
      paddingLeft: 50,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
   },
});
