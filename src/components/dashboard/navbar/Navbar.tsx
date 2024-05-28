"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import logo from "@/assets/logo/blood-svgrepo-com.png"
import Image from "next/image";
import { AlignRight, Bell, MessageCircle, MessageCircleMore, SearchIcon } from "lucide-react";
import { Notification } from "phosphor-react";
import Popbar from "../popbar/Popbar";
import DashboardProfileBadge from "@/components/Shared/Profile/DashboardProfileBadge";


interface ISidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

 const  DashboardNavbar:React.FunctionComponent<ISidebarProps> = ({isSidebarOpen,setIsSidebarOpen}) =>  {
    return (
        <Navbar  className="block max-w-full duration-50 " isBordered>
            <Button  onClick={() => setIsSidebarOpen(!isSidebarOpen)} isIconOnly className="text-coral-400 bg-coral-50  lg:hidden">
                <AlignRight />
            </Button>

            <NavbarContent >
                
                <Input
                style={{
                    background:"transparent"
                }} 
                    startContent={<SearchIcon className="text-coral-400" />}
                    isClearable
                    className={`${isSidebarOpen ? 'w-full' : 'ml-auto'}`}
                    classNames={{
                        input: "w-full",
                        mainWrapper: "w-full",
                    }}
                    size="lg"
                    placeholder="Search"
                />


              

                
                <NavbarItem className={`flex items-center  space-x-2 '}`}>
                    <Popbar />
                    <Button   isIconOnly className="bg-coral-50 text-coral-400">
                        <MessageCircleMore size={25} />
                    </Button>
                </NavbarItem>

                
               
            </NavbarContent>

         

           <DashboardProfileBadge />
        </Navbar>
    );
}
export default DashboardNavbar