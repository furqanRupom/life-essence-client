"use client"
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Spacer, Switch,cn } from '@nextui-org/react';
import { MessageSquare, Settings, Facebook, Instagram, Twitter, Circle, Squircle, Edit } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IWholePageProps {
}

const WholePage: React.FunctionComponent<IWholePageProps> = (props) => {
    const { data, isLoading } = useGetMyProfileQuery({});

    return <>
        <>

            <section className='relative'>
                <Image alt='logo' width={500} height={600} className='w-full h-[300px] object-cover' src='https://cdn.vectorstock.com/i/500p/91/09/abstract-background-fluid-gradients-flowing-mesh-vector-45259109.jpg' />

                <nav className='flex flex-col -mt-20 lg:flex-row w-full bg-default-50 justify-between relative rounded-3xl bg-opacity-70 items-center p-5 max-w-6xl backdrop-blur-sm mx-auto shadow-md '>
                    <div className='absolute bg-[#fff] bg-opacity-20 w-full '></div>
                    <div className='flex flex-col py-3 space-y-3 lg:space-y-0 lg:py-0 lg:flex-row items-center space-x-3'>
                        <Avatar className='w-24 ring rounded-2xl ring-coral-400 h-24' src={data?.image || ""} />
                        <div>
                            <h3 className='text-2xl lg:text-3xl font-bold text-default-600 capitalize'>{data?.name}</h3>
                    <h3 className='text-lg lg:text-xl font-bold text-default-500 text-center lg:text-left'>{data?.email}</h3>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <Link href="/dashboard/chat">
                            <Button startContent={<MessageSquare />} className='bg-coral-400 text-coral-50 font-semibold '>Messages</Button>
                      </Link>
                       <Link href="/dashboard/settings">
                            <Button startContent={<Edit />} className='bg-[#fff] shadow text-coral-400 font-semibold '>Edit Profile</Button>
                       </Link>
                    </div>
                </nav>
            </section>

            <div className="bg-gray-100 p-8 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Platform Settings Card */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Notification</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Switch color='default'
                                        classNames={{

                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >

                                    </Switch>
                                    <span className='text-default-500 text-md'>Email me when someone follows me</span>
                                </div>
                                <Spacer y={4} />
                                <div className="flex items-center">
                                    <Switch color='default'
                                        classNames={{

                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >

                                    </Switch>
                                    <span className='text-default-500 text-md'>Email me when someone answers on my post</span>
                                </div>
                                <Spacer y={4} />
                                <div className="flex items-center">
                                    <Switch color='default'
                                        classNames={{

                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >

                                    </Switch>
                                    <span className='text-default-500 text-md'>Email me when someone mentions me</span>
                                </div>
                                <Spacer y={4} />
                                <div className="flex items-center  mt-4">
                                    <Switch color='default'
                                        classNames={{

                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >

                                    </Switch>
                                    <span className='text-default-500 text-md'>New launches and projects</span>
                                </div>
                                <Spacer y={4} />
                                <div className="flex items-center">
                                    <Switch color='default'
                                        classNames={{

                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >

                                    </Switch>
                                    <span className='text-default-500 text-md'>Monthly product updates</span>
                                </div>
                                <Spacer y={4} />
                                <div className="flex items-center">
                                    <Switch color='default'
                                        classNames={{
                                         
                                            wrapper: "p-0 h-6  overflow-visible",
                                            thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                                //selected
                                                "group-data-[selected=true]:ml-6",
                                                // pressed
                                                "group-data-[pressed=true]:w-7",
                                                "group-data-[selected]:group-data-[pressed]:ml-4",
                                            ),
                                        }}
                                    >
                                      
                                    </Switch>
                                    <span className='text-default-500 text-md'>Subscribe to newsletter</span>
                                </div>
                                <Spacer y={4} />
                            </div>
                        </div>

                        {/* Profile Information Card */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                            <div className="space-y-2 pt-5">
                                <div className="flex items-center space-x-2 text-md">
                                    <span className='font-semibold text-default-600'>Full Name</span>
                                    <span className='capitalize text-default-500'> : {data?.name}</span>
                                </div>
                                {data?.phoneNumber && (
                                    <div className="flex items-center space-x-2 text-md">
                                        <span className='font-semibold text-default-600'>Phone Number</span>
                                        <span className='text-default-500'> : {data?.phoneNumber}</span>
                                    </div>
                                )}
                                <div className="flex items-center space-x-2 text-md">
                                    <span className='font-semibold text-default-600'>Email</span>
                                    <span className='text-default-500'> : {data?.email}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-md">
                                    <span className='font-semibold text-default-600'>Blood Group</span>
                                    <span className='text-default-500'> : {makeBloodGroups(data?.bloodType)}</span>
                                </div>
                                {data?.emergencyPhoneNumber && (
                                    <div className="flex items-center space-x-2 text-md">
                                        <span className='font-semibold text-default-600'>Emergency Number</span>
                                        <span className='text-default-500'> : {data?.emergencyPhoneNumber}</span>
                                    </div>
                                )}
                                <div className="flex items-center space-x-2 text-md">
                                    <span className='font-semibold text-default-600'>Location</span>
                                    <span className='text-default-500'> : {data?.location}</span>
                                </div>
                                {data?.socialMediaMethods && (
                                    <div className="flex items-center space-x-2 py-5">

                                        <span className='text-lg font-semibold text-default-600'>Social:</span>
                                        <Link href={data?.socialMediaMethods?.facebook}><Facebook size={20} className="text-default-600 " /></Link>

                                        <Link href={data?.socialMediaMethods?.twitter}>
                                            <Twitter size={20} className="text-default-400 " />
                                        </Link>
                                        <Link href={data?.socialMediaMethods?.instagram}>
                                            <Instagram size={20} className="text-default-500 " />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Conversations Card */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Conversations</h3>
                            <div className="space-y-4">
                               
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="w-10 h-10 rounded-full" src="https://imgv3.fotor.com/images/blog-cover-image/ID-Photo-Requirements-for-Passport-and-Identity-Card.jpg" />
                                        <div>
                                            <h4 className="text-sm font-semibold">Anne Marie</h4>
                                            <p className="text-xs text-gray-600">Awesome work, can you...</p>
                                        </div>
                                    </div>
                                    <button className="text-danger-500 font-semibold">Reply</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1fJdYD5zMTH7J3SYREXO72t94yaMk_KZN3fR4dC9oNDshZsf6HYff3q1d7FowWUW01g&usqp=CAU" />
                                        <div>
                                            <h4 className="text-sm font-semibold">Ivanna</h4>
                                            <p className="text-xs text-gray-600">About files I can...</p>
                                        </div>
                                    </div>
                                    <button className="text-danger-500 font-semibold">Reply</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvfyJVK5W8c_3M-f3IF8rURvueftVdeJI2CvbPS9IGH45pox7w2YcVrfBQqGkTL7l_xg&usqp=CAU" />
                                        <div>
                                            <h4 className="text-sm font-semibold">Peterson</h4>
                                            <p className="text-xs text-gray-600">Have a great afternoon...</p>
                                        </div>
                                    </div>
                                    <button className="text-danger-500 font-semibold">Reply</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0ehQUsuYAI1pKEHeYr3Qwp5orNQHJblzFfdKIJe_G4iPj-1OpyzxQZMASoEyqNWTfPU&usqp=CAU" />
                                        <div>
                                            <h4 className="text-sm font-semibold">Nick Daniel</h4>
                                            <p className="text-xs text-gray-600">Hi! I need more information...</p>
                                        </div>
                                    </div>
                                    <button className="text-danger-500 font-semibold">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </>;
};

export default WholePage;
