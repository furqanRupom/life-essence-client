"use client";
import { Button, Image } from '@nextui-org/react';
import { ArrowDownRightFromSquare } from 'lucide';
import { ArrowDownRightFromSquareIcon, ArrowUpRightFromSquare } from 'lucide-react';
import Link from 'next/link';
import loadingGif from "@/assets/gif/loading.gif"
import * as React from 'react';

interface IWelcomeSectionProps {
}

const WelcomeSection: React.FunctionComponent<IWelcomeSectionProps> = (props) => {
    return (
        <section className='max-w-7xl mx-auto mt-16 mb-8'>
           
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center py-16 lg:pt-0 lg:pb-0">
               
                <div className="relative flex order-2 z-20 flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pl-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-coral-400 uppercase rounded-full ">
                            Help the people in need
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Welcome to Blood
                            <br className="hidden md:block" />
                            Donors Organization
                        </h2>
                        <p className="pr-5 mb-5 text-base text-default-600 md:text-lg">
                            Join us in our mission to save lives by donating blood. Our organization is dedicated to providing safe and reliable blood donations to those in need. Whether you are a first-time donor or a seasoned one  your contribution makes a significant impact.
                        </p>
                        <div className="flex items-center">
                           <Button className='text-coral-400 bg-coral-50 text-xl'><Link href="/donnors">Donate Now</Link></Button>
                        </div>
                        <ul className="mt-5 grid grid-cols-2 gap-10">
                            <div className='space-y-5'>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>Good Service</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>Help People</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>Hygiene Tools</span>
                                </li>
                            </div>

                           <div className='space-y-5'>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>24h Service</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>Health Check</span>
                                </li>
                                <li className="flex items-center space-x-2 text-gray-800">
                                    <span><ArrowDownRightFromSquareIcon size={20} /></span>
                                    <span>Blood Bank</span>
                                </li>
                           </div>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:block l">
                    <div className="relative h-full">

                        
                        <svg style={{
                            transform:"scale(-1)"
                        }}
                            className="absolute -right-64 z-20 hidden h-full text-white transform -translate-x-1/2 lg:block"
                            viewBox="0 0 400 80"
                            fill="#fff"
                            width={2000}
                            preserveAspectRatio="none slice"
                        >
                            <path d="M50 0H100L50 100H0L50 0Z" />
                        </svg>
                     
                        <Image
                            className="object-cover  rounded-none w-full "
                            src="https://images.pexels.com/photos/6285378/pexels-photo-6285378.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                            alt="Woman donating blood"
                        />
                        
                        <img
                            className="absolute object-cover  rounded-full ring ring-coral-50 w-48 top-1/3 h-48 z-30 right-0"
                            src="https://media.istockphoto.com/id/1298127415/photo/doctor-holding-red-heart-and-promoting-healthy-lifestyle-and-prevention-of-heart-diseases.webp?b=1&s=170667a&w=0&k=20&c=oSn9Fdfhax8a3tmBLxGWAT8t7lsP_b5vd-5l4OLqzHw="
                            alt="Doctor holding blood sample"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
