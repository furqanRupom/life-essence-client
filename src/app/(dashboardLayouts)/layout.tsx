import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import * as React from 'react';

interface IDashboardLayoutProps {
    children:React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({children}) => {
  return <section className='flex'>
  <Sidebar />
  <div >
          {children}
  </div>
  </section>;
};

export default DashboardLayout;
