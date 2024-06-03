"use client";
import Banner from '@/components/reusable/Banner';
import { useDonorDetailsQuery } from '@/redux/api/bloodsApi';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Button, Chip, Divider } from '@nextui-org/react';
import { IbloodGroup, makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { MailCheck, Droplet, LocateIcon, Phone, PhoneCall, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import EssenceLoader from '@/components/Shared/Loader/Loader';
import DonorDetailsSkeleton from '../skeleton/donorDetailsSkeleton';

interface IDonorsDetailsPageProps {
    params: string
}

const DonorsDetailsPage: React.FunctionComponent<IDonorsDetailsPageProps> = ({ params }) => {
    const { data: details, isLoading, error } = useDonorDetailsQuery(params);
    const router = useRouter();

    return (
        <>
            <Banner title='Donor Details' subTitle='donorDetails' />
            {!isLoading ? (
                <section className='py-10'>
                    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                        <Link href="/donnors" className="text-gray-500 hover:text-gray-700 text-sm mb-4 inline-block">
                            &lt; Back to all donors
                        </Link>
                        <div className="flex  items-center justify-center space-x-5">
                            <div className="flex flex-col items-center lg:items-start">
                                {details.image ? (
                                    <img
                                        src={details.image}
                                        alt={`${details.name}'s photo`}
                                        className="w-52 h-52 rounded-3xl object-cover mb-4 shadow-lg"
                                    />
                                ) : (
                                    <Avatar
                                            src='https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg'
                                        className='w-48 h-48 bg-coral-50 rounded-full text-coral-400 mb-4'
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800">{details.name}</h2>
                                <p className="text-md text-gray-600 ">{details.location}</p>
                                <div className='mb-4'>
                                    <Chip className='text-default-50' size='sm' color={details.availability ? 'success' : 'danger'} >
                                        {details.availability ? "Available" : "Unavailable"}
                                    </Chip>
                                </div>
                                <Divider className="my-2" />
                                <div className="w-full ">
                                    <p className="text-md text-gray-700 flex items-center mb-2">
                                        <MailCheck className="w-5 h-5 mr-2" />
                                        <strong className='text-default-500'>Email : </strong> <span className='ml-1'> {details.email}</span>
                                    </p>
                                    <p className="text-md text-gray-700 flex items-center mb-2">
                                        <Droplet className="w-5 h-5 mr-2" />
                                        <strong className='text-default-500'>Blood Group : </strong> <span className='ml-2'> {makeBloodGroups(details.bloodType as IbloodGroup)}</span>
                                    </p>
                                    <p className="text-md text-gray-700 flex items-center mb-2">
                                        <LocateIcon className="w-5 h-5 mr-2" />
                                        <strong className='text-default-500'>Location : </strong> 
                                        <span className='ml-1'> {details.location}</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        {details?.doner.length > 0 && details?.doner[0].requestStatus === 'APPROVED' && (
                            <div className="mt-5 ">
                                <h3 className="font-semibold text-md">Contact Information</h3>
                                <Divider className='my-3' />
                                <p className="text-md text-gray-700 mb-2 flex items-center">
                                    <Phone className="w-5 text-default-500 h-5 mr-2" />
                                    <strong className='text-default-500'>Phone number : </strong>
                                    <span className='ml-1'> {details.phoneNumber}</span>
                                </p>
                                <p className="text-md text-gray-700 mb-2 flex items-center">
                                    <PhoneCall className="w-5 text-default-500 h-5 mr-2" />
                                    <strong className='text-default-500'>Emergency phone number : </strong>
                                    <span className='ml-1'> {details.emergencyPhoneNumber}</span>
                                </p>
                                {details?.socialMediaMethods && (
                                    <div className='pt-4'>
                                        <h3 className="font-semibold text-md">Social Information</h3>
                                        <Divider className="my-2" />
                                        <div className='flex items-center  pb-1 space-x-3 text-gray-600'>
                                            {details?.socialMediaMethods.facebook && <Link href={details?.socialMediaMethods.facebook}><Facebook /></Link>}
                                            {details?.socialMediaMethods.twitter && <Link href={details?.socialMediaMethods.twitter}><Twitter /></Link>}
                                            {details?.socialMediaMethods.instagram && <Link href={details?.socialMediaMethods.instagram}><Instagram /></Link>}
                                        </div>
                                        {details?.socialMediaMethods.whatsApp && (
                                            <h3>WhatsApp number: <span className='text-gray-600 '>{details?.socialMediaMethods.whatsApp}</span></h3>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className='flex justify-center mt-8'>
                            <Link href={`/donnors/blood-request/${details.id}`}>
                                <Button size='lg' className="bg-coral-50 text-coral-400 font-semibold hover:bg-coral-100 w-full">
                                    Request Blood
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            ) : (
                <DonorDetailsSkeleton />
            )}
        </>
    );
};

export default DonorsDetailsPage;
