"use client";
import DashboardNavbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import * as React from 'react';

interface IDashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);
  return <section className='flex'>
    <div className='z-50 lg:z-0'>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
    <div className='flex-grow'>
      <DashboardNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div>
        {children}
      </div>
    </div>
  </section>;
};

export default DashboardLayout;
