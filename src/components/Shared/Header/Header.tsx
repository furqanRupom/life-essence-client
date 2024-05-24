"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem,DropdownTrigger,Dropdown,DropdownItem,DropdownMenu, Avatar} from "@nextui-org/react";
import { Link,Button } from "@nextui-org/react";
import { ListTree, X } from "lucide-react";
import logo from "@/assets/logo/blood-svgrepo-com.png"
import Image from "next/image";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar className="lg:py-3" position="sticky" isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <button className="text-coral-400 text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? <X /> : <ListTree />
                    }
                </button>


            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand className="flex flex-col">
                    <Image src={logo} width={20} height={20} alt="logo" />
                    <p className="font-bold text-lg text-coral-400">Life Essence</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
               
                <NavbarItem>
                    <Link color="foreground" className=" text-lg" href="#">
                     Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground" className=" text-lg">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className=" text-lg" href="#">
                        Donors
                    </Link>
                </NavbarItem>


            
            </NavbarContent>
            <NavbarContent className="hidden sm:block">
                <NavbarBrand className="flex flex-col">
                    <Image src={logo} width={20} height={20} alt="logo" />
                    <p  className="font-extrabold text-2xl text-coral-400  ">Life Essence</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
           
                <NavbarItem>
                    <Button size="lg" as={Link} className="bg-coral-50 tex-lg text-coral-400 font-bold" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Navbar>
    );
}
