import React from "react";
import styles from './Hero.module.css';
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

interface IHeroContentProps {
    title: string;
    description: string;
    backgroundImage: string;
    styleProps?:any
}

export const HeroContent: React.FunctionComponent<IHeroContentProps> = ({ title, description, backgroundImage,styleProps }) => {
    return (
        <div className=" py-14">
                <div className="relative">
                    <img
                        src={backgroundImage}
                        className="absolute inset-0 object-cover w-full h-full"
                        alt="Blood donation"
                    />
                    <div className="relative bg-opacity-90 bg-default-900">
                        <svg
                            style={{
                                ...styleProps
                            }}

                            className="absolute inset-x-0 -bottom-1  text-white "
                            viewBox="0 0 1160 163"
                        >
                            <path
                                fill="#f47f6a"
                                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                            />
                        </svg>
                        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-coral-50 sm:text-4xl sm:leading-none">
                                        {title}
                                    </h2>
                                    <p className="max-w-xl mb-4 text-base text-coral-50 md:text-lg">
                                        {description}
                                    </p>

                                    <Button size="lg"
                                        href="/learn-more"
                                        aria-label="Learn more about blood donation"
                                        className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-coral-50 text-coral-400 mt-4"
                                    >
                                        <Link href="/donnors">Donate Now</Link>
                                        <ArrowRightSquare />
                                    </Button>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10 bg-coral-50">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Why Donate Blood?
                                        </h3>
                                        <p className="text-base text-gray-700 sm:text-lg">
                                            Donating blood saves lives. Your contribution can make a difference in emergency situations and for those with chronic illnesses. Learn more about the impact of your donation.
                                        </p>
                                        <div className="mt-4">
                                            <Button className="bg-coral-300 font-semibold text-default-500">
                                                <Link href="/help">For Help</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
          
    );
};
