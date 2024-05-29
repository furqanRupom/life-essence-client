"use client";
import * as React from 'react';
import { BloodChart } from '../../chart/user/BloodChart';
import BloodBarChart from '../../chart/user/BloodBarChart';
import { Card } from '@nextui-org/react';
import dynamic from 'next/dynamic';

interface IUserHomePageProps { }

const BloodDonationMetrics = dynamic(() => import("../../chart/user/ProgressChart"), { ssr: false });


const UserHomePage: React.FunctionComponent<IUserHomePageProps> = (props) => {
    return (
        <>
           <BloodDonationMetrics userMetrics={{
                donations: [3,2,0,1],
                donationRequests: [0,5,32,12,2],
                monthlyDonations: [24, 35],
                monthlyRequests: [3, 4,5,7,1,0,1]
           }}/>

            <div className='grid lg:grid-cols-2 max-w-6xl mx-auto gap-5'>
                <Card className='p-6 shadow-lg rounded-lg bg-white'>
                    <BloodChart />
                </Card>
                <Card className='p-6 shadow-lg rounded-lg bg-white'>
                    <BloodBarChart />
                </Card>
            </div>
        </>
    );
};

export default UserHomePage;
