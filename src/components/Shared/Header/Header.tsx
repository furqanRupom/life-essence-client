"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem,DropdownTrigger,Dropdown,DropdownItem,DropdownMenu, Avatar} from "@nextui-org/react";
import { Link,Button } from "@nextui-org/react";
import { Contact, HandHelping, Home, ListMusic, ListTree, Newspaper, X } from "lucide-react";
import logo from "@/assets/logo/blood-svgrepo-com.png"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent, motion } from "framer-motion"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [halfWidth, setHalfWidth] =React.useState<boolean>(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > Math.ceil(0)) {
            setHalfWidth(true);
        } else {
            setHalfWidth(false);
        }

    })
    const menuItems = [
        {
            name:"home",
            routes:"/",
            icon:Home
        },
        {
            name: "about",
            routes: "/about",
            icon:ListMusic
        },
         {
            name: "donnors",
            routes: "/donnors",
            icon:HandHelping
        },
        {
            name: "news",
            routes: "/news",
            icon:Newspaper
        },
        {
            name: "contact",
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
            name: "news",
            routes: "/news",
            icon: Newspaper
        },
        {
            name: "contact",
            routes: "/contact",
            icon: Contact
        }
    ]

    const pathname = usePathname();
 

    

    return (
        <Navbar className={`py-3 lg:py-2  fixed   ${halfWidth ? "max-w-5xl mx-auto lg:my-10 lg:rounded-3xl  duration-500 transition-all bg-default-50 lg:bg-transparent" : "duration-500 bg-default-50 transition-all "}`}  isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} isBordered disableAnimation>


            <NavbarContent className="lg:hidden pr-3" >
                <NavbarBrand className="flex ">
                    <Image src={logo} width={30} height={30} alt="logo" />
                    <p className="font-bold text-xl text-coral-400 mt-1">Life Essence</p>

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

                  
                    <Button size="md" as={Link} className="bg-coral-50  text-lg text-coral-400 font-bold" href="#" variant="flat">
                        Sign Up
                    </Button>
                 
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
                            size="lg"
                        >
                            {item.name}
                        </Link>

                       </div>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            {/* <Dropdown placement="bottom-end">
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
            </Dropdown> */}
        </Navbar>
    );
}
