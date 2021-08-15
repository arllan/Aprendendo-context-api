import React,{ useState, createContext } from 'react';

export const GlobalContext = createContext({}); // criando contexto

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(); // variaveis acessadas de forma global
  const [persona, SetPersona] = useState(); // variaveis acessadas de forma global

 return (
   <GlobalContext.Provider value={{ user, setUser, persona, SetPersona }}>
       {children}
   </GlobalContext.Provider>
  );
}

