"use client";
import React from "react";
import  Link  from "next/link";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo/blood-svgrepo-com.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 max-w-7xl mx-auto">
            <div className="container">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full px-4 sm:w-2/3 lg:w-[30%]">
                        <div className="mb-10 w-full">
                            <div className="flex items-center">
                                <Image src={logo} alt="logo" width={30} height={30} />
                                <p className="font-bold text-2xl text-coral-400 ml-2">Life Essence</p>
                            </div>
                            <p className="text-base text-body-color dark:text-dark-6 my-3">
                                Life Essence is dedicated to connecting blood donors with those in need. Save lives by donating blood today.
                            </p>
                            <div className="flex items-center text-sm font-medium text-dark dark:text-white">
                                <span className="mr-3 text-primary">
                                    <Phone className="text-coral-400" />
                                </span>
                                <span>+012 (345) 678 99</span>
                            </div>
                            <div className="flex items-center text-sm font-medium text-dark dark:text-white pt-3">
                                <span className="mr-3 text-primary">
                                    <Mail className="text-coral-400" />
                                </span>
                                <span>contact@lifeessence.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 sm:w-1/3 lg:w-[20%] ">
                        <h4 className=" mb-4 mt-2 lg:mt-0 text-lg font-semibold text-dark dark:text-white ">
                            Be a Donor
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/donor-registration">Become a Donor</Link>
                            </li>
                            <li>
                                <Link href="/eligibility">Eligibility Requirements</Link>
                            </li>
                            <li>
                                <Link href="/blood-donation-process">Blood Donation Process</Link>
                            </li>
                            <li>
                                <Link href="/donor-stories">Donor Stories</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full px-4 sm:w-1/3 lg:w-[20%] ">
                        <h4 className="mb-4 mt-2 lg:mt-0text-lg font-semibold text-dark dark:text-white">
                            For Recipients
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/find-blood">Find Blood Donors</Link>
                            </li>
                            <li>
                                <Link href="/blood-types">Blood Types Information</Link>
                            </li>
                            <li>
                                <Link href="/patient-stories">Patient Stories</Link>
                            </li>
                            <li>
                                <Link href="/faq">Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full px-4 sm:w-1/3 lg:w-[20%] ">
                        <h4 className="mb-4 mt-2 lg:mt-0 text-lg font-semibold text-dark dark:text-white">
                            About Us
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about-us">Our Mission & Vision</Link>
                            </li>
                            <li>
                                <Link href="/team">Meet Our Team</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/news">News & Events</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center py-3">Copyright and &copy; {new Date().getFullYear()} By Life Essence</p>
        </footer>

    )
}

export default Footer
