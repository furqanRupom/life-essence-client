"use client";
import * as React from 'react';
import DonationRequestTable from './components/DonationRequestTable';
import { Button, Input } from '@nextui-org/react';
import { File, SearchIcon } from 'lucide-react';
import BreadcrumbsTitle from '@/components/dashboard/breadcrumbs/BreadCrumbsTitle';

interface IDonationRequetsPageProps {
}

const DonationRequetsPage: React.FunctionComponent<IDonationRequetsPageProps> = (props) => {
  return <section className='mx-8'>


    <div>
      <div className='flex items-end justify-between px-5 pt-12 pb-5'>
        <div>
          <BreadcrumbsTitle routes={['dashboard', 'user', 'donation-requests']} />
          <h3 className='py-3 text-xl font-semibold text-default-600'>All Blood Requests</h3>
          <Input
            style={{
              background: "transparent"
            }}

            startContent={<SearchIcon className="text-coral-400" />}
            isClearable

            size="lg"
            placeholder="Search"
          />

        </div>
        <div className='flex items-center gap-5'>
          <Button className='bg-coral-50 text-coral-400 font-semibold'>
            Ask for blood
          </Button>
          <Button className='text-coral-50 bg-coral-400 font-semibold'>
            <File />  Export as CSV
          </Button>
        </div>

      </div>

    </div>
    <DonationRequestTable/>
  </section>;
};

export default DonationRequetsPage;
