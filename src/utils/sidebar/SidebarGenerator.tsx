import { HandCoins, Library, LucideProps, Settings, Shapes, SquareMousePointer, User, Users } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Role = "ADMIN" | "USER";
const  userRole  = {
    ADMIN:"admin",
    USER:"user",
}

export const SidebarGenerator = (values: Role) => {
    const role =  values.toLowerCase();
    let SidebarLinks: { name: string; route: string; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; }[] = [];

    switch (role) {
        case userRole.ADMIN:
            SidebarLinks = [
                {
                    name: "Dashboard",
                    route: "/dashboard",
                    icon: Shapes
                },
                {
                    name: "Blood management",
                    route: `/${role}/blood-management`,
                    icon: Library
                },
                {
                    name: "User management",
                    route: `/${role}/user-management`,
                    icon: Users
                }
            ];
            break;

        case userRole.USER:
            SidebarLinks = [
                {
                    name: "Dashboard",
                    route: "/dashboard",
                    icon: Shapes
                },
                {
                    name: "Blood Requests",
                    route: `/${role}/blood-requests`,
                    icon: HandCoins
                },
                {
                    name: "Donation Requests",
                    route: `/${role}/donation-requests`,
                    icon: SquareMousePointer
                }
            ];
            break;

        default:
            break;
    }

    SidebarLinks.push(
        {
            name: "Profile",
            route: `/${role}/profile`,
            icon: User
        },
        {
            name: "Settings",
            route: `/${role}/settings`,
            icon: Settings
        }
    );

    return SidebarLinks;
};
