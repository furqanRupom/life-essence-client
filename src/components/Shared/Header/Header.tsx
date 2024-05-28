"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem,DropdownTrigger,Dropdown,DropdownItem,DropdownMenu, Avatar} from "@nextui-org/react";
import {Button } from "@nextui-org/react";
import Link from "next/link";
import { Contact, HandHelping, Home, ListMusic, ListTree, Newspaper, X ,Group} from "lucide-react";
import logo from "@/assets/logo/blood-svgrepo-com.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { isLoggedIn } from "@/utils/auth/isLoggedIn";
import ProfileBadge from "../Profile/ProfileBadge";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [halfWidth, setHalfWidth] =React.useState<boolean>(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > Math.ceil(100)) {
            setHalfWidth(true);
        } else {
            setHalfWidth(false);
        }

    })
    const menuItems = [
        {
            name:"Home",
            routes:"/",
            icon:Home
        },
        {
            name: "About",
            routes: "/about",
            icon:ListMusic
        },
         {
            name: "Donnors",
            routes: "/donnors",
            icon:HandHelping
        },
        {
            name: "Campaign",
            routes: "/campaign",
            icon: Group
        },
        {
            name: "Contact",
            routes: "/contact",
            icon:Contact
        }
    ];
    const forLargerDevicesLeftSideMeunu = [
        {
            name: "home",
            routes: "/",
            icon: Home
        },
        {
            name: "about",
            routes: "/about",
            icon: ListMusic
        },
        {
            name: "donnors",
            routes: "/donnors",
            icon: HandHelping
        },
       
    ];

    const forLargerDevicesRightSideMenu = [
        {
            name: "Campaign",
            routes: "/campaign",
            icon: Group
        },
        {
            name: "contact",
            routes: "/contact",
            icon: Contact
        }
    ]

    const pathname = usePathname();

    const loggedIn = isLoggedIn();
 

    

    return (
        <Navbar className={`py-3 lg:py-2  fixed   ${halfWidth ? "max-w-5xl mx-auto lg:my-10 lg:rounded-3xl  duration-500 transition-all bg-default-50 lg:bg-transparent" : "duration-500 bg-default-50 transition-all "}`}  isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} isBordered disableAnimation>


            <NavbarContent className="lg:hidden pr-3" >
                <NavbarBrand className="flex ">
                    <Image src={logo} width={30} height={30} alt="logo" />
                    <p className="font-bold text-xl text-coral-400 ">Life Essence</p>

                </NavbarBrand>
            </NavbarContent>
            
           


            <NavbarContent className="hidden lg:flex gap-5" justify="start" >
                {/* larger  device left side menu */}

                {
                    forLargerDevicesLeftSideMeunu.map((item) => <NavbarItem  isActive={pathname === item.routes} key={item.routes}>
                        <Link className={`text-lg capitalize text-default-600 ${pathname === item.routes ? "text-coral-400 ":""}`}  href={item.routes}>{item.name}</Link>
                    </NavbarItem>)

                }
       
            </NavbarContent>
            <NavbarContent  justify="center" className="hidden lg:block">
                <NavbarBrand className="flex mt-2">
                    <Image src={logo} width={30} height={30} alt="logo" />
                    <p  className="font-extrabold text-3xl text-coral-400  mt-2">Life Essence</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                {
                    forLargerDevicesRightSideMenu.map((item) => <NavbarItem className="hidden lg:block" isActive={pathname === item.routes} key={item.routes}>
                        <Link className={`text-lg capitalize text-default-600 ${pathname === item.routes ? "text-coral-400 " : ""}`} href={item.routes}>{item.name}</Link>
                    </NavbarItem>)

                }
                
           
                <NavbarItem>
                    {/* larger  device left side menu */}

                  
                   {
                        !loggedIn ? <Button size="md" as={Link} className="bg-coral-50  text-lg text-coral-400 font-bold" href="/signup" variant="flat">
                            Sign Up
                        </Button> : <ProfileBadge />
                   }
                 
                </NavbarItem>

                <NavbarItem>
                    <button className="text-coral-400 lg:hidden mt-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {
                            isMenuOpen ? <X width={30} height={30} /> : <ListTree width={30} height={30} />
                        }
                    </button>
                </NavbarItem>
               
            </NavbarContent>
       

            <NavbarMenu className="py-8 bg-default-50">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className="items-center justify-center gap-3 "  isActive={pathname === item.routes} key={`${item.routes}-${index}`}>



                        <div className={`flex items-center justify-center gap-3 ${pathname === item.routes ? "text-coral-400" : ""}`}>
                            <small> <item.icon></item.icon></small>
                        <Link
                                className={`w-full text-xl text-default-600 mt-1  ${pathname === item.routes ? "text-coral-400" : ""}`}
                            
                            href={item.routes}
                          
                        >
                            {item.name}
                        </Link>

                       </div>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        
        </Navbar>
    );
}
