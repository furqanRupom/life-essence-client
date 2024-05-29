"use client";
import UserHomePage from '@/components/dashboard/pages/user/UserHome';

import * as React from 'react';

interface IDashboardHomePageProps {
}

const DashboardHomePage: React.FunctionComponent<IDashboardHomePageProps> = (props) => {
  return <>

  <UserHomePage />
  </>;
};

export default DashboardHomePage;
