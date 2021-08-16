import React from 'react';
import {View, FlatList} from 'react-native';
import {Cell} from './Cell';

export function Field({field}) {
   return (
      <FlatList
         data={field}
         keyExtractor={item => String(item[0].y)}
         ItemSeparatorComponent={() => <View style={{width: '100%', borderBottomWidth: 1, borderColor: '#000'}} />}
         renderItem={({item}) => {
            return (
               <FlatList
                  data={item}
                  keyExtractor={item => String(item.x)}
                  renderItem={({item}) => {
                     return <Cell params={item} />;
                  }}
                  ItemSeparatorComponent={() => (
                     <View style={{height: '100%', borderRightWidth: 1, borderColor: '#000'}} />
                  )}
                  horizontal
               />
            );
         }}
      />
   );
}
