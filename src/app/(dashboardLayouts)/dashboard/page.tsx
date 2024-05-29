import BloodBarChart from '@/components/dashboard/chart/user/BloodBarChart';
import { BloodChart } from '@/components/dashboard/chart/user/BloodChart';
import UserHomePage from '@/components/dashboard/pages/user/UserHome';
import { Progress } from '@nextui-org/react';

import * as React from 'react';

interface IDashboardHomePageProps {
}

const DashboardHomePage: React.FunctionComponent<IDashboardHomePageProps> = (props) => {
  return <>

  <UserHomePage />
  </>;
};

export default DashboardHomePage;
