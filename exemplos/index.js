import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';

import ExemploComunicacaoDireta from './comunicacao-direta';

import ExemploContextApi from './context_api/';

export default function exemplos() {

 return (
   <>
    <ExemploComunicacaoDireta/>
    <ExemploContextApi/>
   </>
  );
}

