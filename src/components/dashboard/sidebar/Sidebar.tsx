"use client";
import { decodeToken } from "@/utils/jwt/jwtDecode";
import { Role, SidebarGenerator } from "@/utils/sidebar/SidebarGenerator";
import { JwtPayload } from "jwt-decode";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Add icons for the toggle button
import { JwtPayloadWithRole } from "@/interfaces/interfaces";



const Sidebar: React.FunctionComponent = () => {
    const user = decodeToken() as JwtPayloadWithRole;
    const sidebarMenus = SidebarGenerator(user?.role);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative min-h-screen ">
            <button
                className="md:hidden p-4"
                onClick={toggleSidebar}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav 
                className={`fixed lg:static h-full inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-coral-50 min-w-[200px] md:min-w-[250px]`}
            >
                <ul className="p-4 space-y-4">
                    {sidebarMenus.map((menu, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <menu.icon className="w-6 h-6" />
                            <Link href={menu.route} className="text-gray-800 hover:text-blue-500">
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

        
        </div>
    );
};

export default Sidebar;
