import AboutSection from '@/components/AboutPage/AboutSection/AboutSection';
import MissionSection from '@/components/AboutPage/MissionSection/MIssionSection';
import Banner from '@/components/reusable/Banner';
import * as React from 'react';

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return <section >
  <Banner title='about us' />
  <AboutSection />
  <MissionSection />
  </section>;
};

export default AboutPage;
