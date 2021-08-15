import React from 'react';
import { View } from 'react-native';

import ComponenteFilho from './component';

export default function comunicacao_direta() {
    var local = 'valorda variavel local';
 return (
   <ComponenteFilho  valorA={123456789} valorB={true} valorC="Ola mundo" valorD={local}/>
  );
}