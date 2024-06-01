"use client";
import Banner from '@/components/reusable/Banner';
import { useDonorDetailsQuery } from '@/redux/api/bloodsApi';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Button, Chip } from '@nextui-org/react';
import { IbloodGroup, makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { BluetoothConnectedIcon, Droplet, LocateIcon, MailCheck, Phone, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import EssenceLoader from '@/components/Shared/Loader/Loader';

interface IDonorsDetailsPageProps {
    params: string
}

const DonorsDetailsPage: React.FunctionComponent<IDonorsDetailsPageProps> = ({ params }) => {
    const { data: details, isLoading, error } = useDonorDetailsQuery(params);
    const router = useRouter();

  if(isLoading){
    return <EssenceLoader />
  }

    if (error || !details) {
        return <p>Error loading donor details or no details found</p>;
    }

  

    return (
        <section className='min-h-screen'>
            <Banner title='Donor Details' subTitle='donorDetails' />
            <div className="container  mx-auto p-6 bg-white rounded-lg shadow-lg max-w-4xl mt-8">
                <Link href="/donors" className="text-gray-500 hover:text-gray-700 text-sm inline-block mb-4">
                    &lt; Back to all donors
                </Link>
                <div className="flex flex-col lg:flex-row  justify-center space-x-12">
                    <div className="flex flex-col items-center">
                        {details.image ? (
                            <img src={details.image} alt={`${details.name}'s photo`} className="w-40 h-40 rounded-full mb-4 shadow-lg" />
                        ) : (
                                <Avatar src='https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' className='w-48 h-48  bg-coral-50 rounded-full text-coral-400 mb-4' />
                        )}
                        <p className="text-lg text-gray-700 flex items-center">
                            <MailCheck className="w-5 h-5 mr-2" />
                            <strong></strong> {details.email}
                        </p>
                        <Chip size='lg' color={details.availability ? 'success' : 'danger'} variant="flat" className="mt-4">
                            {details.availability ? "Available" : "Unavailable"}
                        </Chip>
                    </div>
                    <div className="flex flex-col pt-10">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800 lg:text-5xl">{details.name}</h2>
                        <p className="text-lg text-gray-700 mb-2 flex items-center">
                            <Droplet className="w-5 h-5 mr-2" />
                            <strong>Blood Group : </strong> {makeBloodGroups(details.bloodType as IbloodGroup)}
                        </p>
                        <p className="text-lg text-gray-700 mb-2 flex items-center">
                            <LocateIcon className="w-5 h-5 mr-2" />
                            <strong>Location:  </strong> {details.location}
                        </p>
                        {details.requestStatus === 'approved' && (
                            <div className="mt-4">
                                <p className="text-lg text-gray-700 mb-2 flex items-center">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <strong>Phone Number:</strong> {details.phoneNumber}
                                </p>
                                <p className="text-lg text-gray-700 mb-2 flex items-center">
                                    <PhoneCall className="w-5 h-5 mr-2" />
                                    <strong>Emergency Phone Number:</strong> {details.emergencyPhoneNumber}
                                </p>
                               
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-center mt-16'>
                  <Link href={`/donnors/blood-request/${details.id}`}>
                        <Button size='lg'  className="bg-coral-50 text-coral-400 font-semibold hover:bg-coral-100 w-full">
                            Request Blood
                        </Button>
                  </Link>
                </div>
            </div>
        </section>
    );
};

export default DonorsDetailsPage;
