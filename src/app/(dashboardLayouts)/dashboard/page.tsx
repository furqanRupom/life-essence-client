"use client";
// import UserHomePage from '@/components/dashboard/pages/user/UserHome';

import * as React from 'react';

interface IDashboardHomePageProps {
}
import dynamic from 'next/dynamic';
import { decodeToken } from '@/utils/jwt/jwtDecode';
import AdminHome from '@/components/dashboard/pages/admin/AdminHome';
import { JwtPayloadWithRole } from '@/interfaces/interfaces';
const UserHomePage = dynamic(() => import('@/components/dashboard/pages/user/UserHome'), { ssr: false });
const DashboardHomePage: React.FunctionComponent<IDashboardHomePageProps> = (props) => {

  const user = decodeToken() as JwtPayloadWithRole;
  return <>

  {
    user?.role === 'ADMIN' ? <AdminHome /> : <UserHomePage />
  }
  </>;
};

export default DashboardHomePage;
