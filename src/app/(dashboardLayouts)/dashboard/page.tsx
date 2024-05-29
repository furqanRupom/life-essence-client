"use client";
// import UserHomePage from '@/components/dashboard/pages/user/UserHome';

import * as React from 'react';

interface IDashboardHomePageProps {
}
import dynamic from 'next/dynamic';
const UserHomePage = dynamic(() => import('@/components/dashboard/pages/user/UserHome'), { ssr: false });
const DashboardHomePage: React.FunctionComponent<IDashboardHomePageProps> = (props) => {
  return <>

  <UserHomePage />
  </>;
};

export default DashboardHomePage;
