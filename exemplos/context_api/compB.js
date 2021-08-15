import React,{ useContext} from 'react';
import { View, Text } from 'react-native';

import { GlobalContext } from './provider'; // contexto do context para acessar informação

export default function compB() {
    const { user, setUser, persona, SetPersona} = useContext(GlobalContext); // chama a informação indentificando o contexto

 return (
    <View>
        <Text>componenteB</Text>
        <Text>CompB: {user}</Text>
        <Text>CompB: {persona}</Text>
    </View>
  );
}