import React from 'react';
import { View } from 'react-native';

import CompA from './compA'; // componente A 
import CompB from './compB'; // componente B

import AuthProvider from './provider'; // provider tem que ter tudo dentro dele

export default function context_api() {
 return (
   <AuthProvider>
       <CompA/>
       <CompB/>
   </AuthProvider>
  );
}