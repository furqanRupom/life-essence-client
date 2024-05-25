import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import NewsletterSection from '@/components/Shared/NewsLetter/NewsLetter';
import * as React from 'react';

interface IHomeLayoutProps {
    children:React.ReactNode
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({children}) => {
  return <>
  <Header />
  {children}
  <NewsletterSection />
  <Footer />
  </>;
};

export default HomeLayout;
