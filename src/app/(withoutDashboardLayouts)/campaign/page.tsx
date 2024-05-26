import CampaignSection from '@/components/CampaignPage/CampaignSection/CampaignSection';
import Banner from '@/components/reusable/Banner';
import * as React from 'react';

interface ICampaignPageProps {
}

const CampaignPage: React.FunctionComponent<ICampaignPageProps> = (props) => {
  return <>
  <Banner title='blood donation campaign' />
    <CampaignSection />
  </>;
};

export default CampaignPage;
