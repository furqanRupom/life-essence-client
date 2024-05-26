import Banner from '@/components/reusable/Banner';
import * as React from 'react';

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return <>
  <Banner title='about us' />
  </>;
};

export default AboutPage;
