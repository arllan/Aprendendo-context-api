import React, { useEffect, useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { GlobalContext } from './provider'; // contexto do context para acessar informação

export default function compA() {  
  

  const { user, setUser, persona, SetPersona } = useContext(GlobalContext); // chama a informação indentificando o contexto

  console.log('Dados: '+user) // mostrar a informação no console
 return (
   <View>
     <Text>compA: {user}</Text>
     <Text>compA: {persona}</Text>

       <Text>componenteA</Text>
       <TextInput onChangeText={(val)=>{setUser(val)}} style={{borderColor:'red', borderWidth:1}}/>
       <TextInput onChangeText={(val)=>{SetPersona(val)}} style={{borderColor:'red', borderWidth:1}}/>

   </View>
  );
}