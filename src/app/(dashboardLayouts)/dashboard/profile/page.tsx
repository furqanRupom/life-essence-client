"use client";
import BreadcrumbsTitle from '@/components/dashboard/breadcrumbs/BreadCrumbsTitle';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Calendar, Card, Listbox, ListboxItem, Spacer } from '@nextui-org/react';
import { Mail } from 'lucide-react';
import moment from 'moment';
import * as React from 'react';

// Mock donation history data
const mockDonations = [
  { date: '2020-12-13', units: 120 },
  { date: '2020-11-28', units: 20 },
  { date: '2020-11-04', units: 40 },
  { date: '2020-10-15', units: 310 },
];

interface IProfilePageProps { }

const ProfilePage: React.FunctionComponent<IProfilePageProps> = (props) => {
  const { data, isLoading } = useGetMyProfileQuery({});
  let myGroups;
  if (!isLoading) {
    myGroups = makeBloodGroups(data.bloodType);
  }

  return (
    <section className="bg-gray-100  px-5">
      <div className="pt-12 px-5 pb-5">
        <BreadcrumbsTitle routes={['dashboard', 'user', 'profile']} />
        <h3 className='text-2xl text-default-600 font-semibold py-3'>My Profile</h3>
        {
          !isLoading ? (
            <section className='grid grid-cols-1 lg:grid-cols-[4fr,2fr] gap-10'>
              <div>
                <Card className='py-5 shadow-md px-3'>
                  <Avatar size='lg' className='rounded-md w-20 h-20 bg-coral-50 text-coral-400' />
                  <h3 className='text-xl font-semibold pt-1'>{data?.name}</h3>
                  {
                    data?.profile?.bio && <p className='py-1 text-default-500'>{data?.profile?.bio}</p>
                  }
                  <h3 className='flex items-center space-x-1 text-default-500'><Mail /> <span>{data?.email}</span></h3>
                  <Spacer y={1} />
                </Card>
                <Spacer y={1} />
                <Card className='shadow-md'>
                  <h3 className="text-default-600 font-semibold text-xl p-3 uppercase">General Information</h3>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-3 py-4'>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>My Blood Group</h3>
                      <p>{myGroups}</p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>Age</h3>
                      <p>{data?.profile?.age}</p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>Location</h3>
                      <p>{data?.location}</p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>Last Donation Date</h3>
                      <p>{moment(data?.profile?.lastDonationDate).format('l')}</p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>Join Date</h3>
                      <p>{moment(data?.createdAt).format('l')}</p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-default-600'>Last Update</h3>
                      <p>{moment(data?.updatedAt).format('l')}</p>
                    </div>
                  </div>
                </Card>
             
              </div>
              <div>
                <Card className='shadow-md p-4'>
                  <h3 className="text-default-600 font-semibold text-xl uppercase">Donation History</h3>
                  <Listbox className="text-sm mt-3">
                    {mockDonations.map((donation, index) => (
                      <ListboxItem key={index} className="py-3 border-b-1  rounded-none border-default-200">
                        {moment(donation.date).format('DD MMM YYYY')} - {donation.units} Blood Units
                      </ListboxItem>
                    ))}
                  </Listbox>
                </Card>
                <Spacer y={1} />
                <Card className='shadow-md p-4'>
                  <h3 className="text-default-600 font-semibold text-xl uppercase">Calendar</h3>
                  <div className="text-sm mt-3">
                    <Calendar style={{
                      width: "100%",
                      color: "transparent"
                    }} calendarWidth="100%" aria-setsize={200} className='w-full  bg-none' aria-label="Date (No Selection)" />
                  </div>
                </Card>

              </div>
            </section>
          ) : <></>
        }
      </div>
    </section>
  );
};

export default ProfilePage;
