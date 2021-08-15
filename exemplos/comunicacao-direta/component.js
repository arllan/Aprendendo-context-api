import React from 'react';
import { View, Text } from 'react-native';

export default function component(props) {
 return (
   <View>
       <Text>
           valorA: {props?.valorA}
       </Text>

       <Text>
           valorB: {typeof props?.valorB}
       </Text>

       <Text>
           valorC: {props?.valorC}
       </Text>

       <Text>
           valorD: {props?.valorD}
       </Text>
   </View>
  );
}