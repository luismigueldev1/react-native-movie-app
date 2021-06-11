import React, {useReducer} from 'react';

import {createContext} from 'react';
import {gradientReducer} from './gradientReducer';

export const GradientContext = createContext({} as any); //TODO: definir tipo

const initialState = {
  colors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  prevColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
};

export function GradientProvider({children}: any) {
  const [gradient, dispatch] = useReducer(gradientReducer, initialState);
  return (
    <GradientContext.Provider value={{gradient, dispatch}}>
      {children}
    </GradientContext.Provider>
  );
}
