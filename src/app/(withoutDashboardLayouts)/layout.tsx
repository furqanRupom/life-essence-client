import Header from '@/components/Shared/Header/Header';
import * as React from 'react';

interface IHomeLayoutProps {
    children:React.ReactNode
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({children}) => {
  return <>
  <Header />
  {children}
  </>;
};

export default HomeLayout;
