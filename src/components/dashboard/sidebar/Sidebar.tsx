"use client";
import { decodeToken } from "@/utils/jwt/jwtDecode";
import { Role, SidebarGenerator } from "@/utils/sidebar/SidebarGenerator";
import { JwtPayload } from "jwt-decode";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, Settings, X } from "lucide-react"; // Add icons for the toggle button
import { JwtPayloadWithRole } from "@/interfaces/interfaces";
import logo from "../../../assets/logo/blood-svgrepo-com.png";
import Image from "next/image";
import { Button, Divider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion

interface ISidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const user = decodeToken() as JwtPayloadWithRole;
    const sidebarMenus = SidebarGenerator(user?.role || "user");
    const pathname = usePathname();

    return (
        <div className="z-50 h-full min-h-screen  border border-coral-50">
            <nav
                className={`fixed h-full inset-y-0 bg-coral-50 bg-opacity-25 lg:bg-opacity-10 backdrop-blur-sm left-0 transform ${isSidebarOpen ? 'translate-x-0 md:relative duration-500' : '-translate-x-full duration-500'} transition-transform duration-500 lg:relative lg:translate-x-0 ease-in-out min-w-[300px] md:min-w-[250px] `}
            >
                <div className="flex p-4 items-center">
                    <Image src={logo} width={30} height={30} alt="logo" />
                    <p className="font-bold text-xl text-coral-400 mt-1">Life Essence</p>
                    <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} size="sm" isIconOnly className="bg-coral-400 text-coral-50 ml-auto lg:hidden"><X /></Button>
                </div>
                <Divider />

                <ul className="p-4 space-y-2 overflow-y-auto h-[calc(100%-70px)]"> {/* Updated height to make space for header */}
                    {sidebarMenus.map((menu, index) => (
                        <motion.li
                            key={index}
                            whileTap={{ scale: 0.95 }}
                            className={`hover:bg-coral-50 text-default-60 ${pathname === menu.route ? "bg-coral-50 text-coral-400" : ""} px-3 py-1 rounded-xl`}
                        >
                            <Link href={menu.route} className="text-default-600 items-center gap-3 text-lg py-1 hover:text-blue-500 flex">
                                <menu.icon className="w-6 h-6" />
                                <h3 className="mt-1">{menu.name}</h3>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
