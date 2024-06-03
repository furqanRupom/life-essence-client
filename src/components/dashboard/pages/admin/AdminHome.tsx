import AdminDashboardTable from '@/app/(dashboardLayouts)/dashboard/admin/components/AdminDashboardTable';
import AdminStats from '@/app/(dashboardLayouts)/dashboard/admin/components/AdminStats';
import * as React from 'react';

interface IAdminHomeProps {
}

const AdminHome: React.FunctionComponent<IAdminHomeProps> = (props) => {
  return <>
  <section className='max-w-6xl mx-auto'>
        <AdminStats />
        <AdminDashboardTable />
    </section >
  </>;
};

export default AdminHome;
