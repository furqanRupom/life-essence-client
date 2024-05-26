import AboutSection from '@/components/AboutPage/AboutSection/AboutSection';
import Feedback from '@/components/AboutPage/Feedback/Feedback';
import MissionSection from '@/components/AboutPage/MissionSection/MIssionSection';
import TeamSection from '@/components/AboutPage/TeamSection/TeamSection';
import Banner from '@/components/reusable/Banner';
import * as React from 'react';

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return <section >
  <Banner title='about us' />
  <AboutSection />
  <MissionSection />
  <TeamSection />
  <Feedback />
  </section>;
};

export default AboutPage;
