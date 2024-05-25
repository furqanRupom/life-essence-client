import { NextUIProvider } from '@nextui-org/react';
import * as React from 'react';

interface IProviderProps {
    children:React.ReactNode
}

const Provider: React.FunctionComponent<IProviderProps> = ({children}) => {
  return <>
  <NextUIProvider >
    {children}
  </NextUIProvider>
  </>;
};

export default Provider;
