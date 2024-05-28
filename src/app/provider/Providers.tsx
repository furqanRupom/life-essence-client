"use client";

import { store } from '@/redux/store';
import { NextUIProvider } from '@nextui-org/react';
import * as React from 'react';
import { Provider } from 'react-redux'

interface IProviderProps {
  children: React.ReactNode
}

const EssenceProvider: React.FunctionComponent<IProviderProps> = ({ children }) => {
  return <>
    <Provider store={store}>
      <NextUIProvider >
        {children}
      </NextUIProvider>
    </Provider>
  </>;
};

export default EssenceProvider;
