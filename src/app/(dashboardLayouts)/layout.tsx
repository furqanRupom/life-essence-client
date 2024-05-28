"use client";
import DashboardNavbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import * as React from 'react';

interface IDashboardLayoutProps {
    children:React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({children}) => {
  const [isSidebarOpen,setIsSidebarOpen] = React.useState<boolean>(true);
  return <section className='flex'>
  <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
  <div className='flex-grow'>
    <DashboardNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    <div>

          {children}
    </div>
  </div>
  </section>;
};

export default DashboardLayout;
