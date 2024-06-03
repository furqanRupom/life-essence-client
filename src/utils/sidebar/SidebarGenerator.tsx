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
                    route: `/dashboard/${role}/blood-requests`,
                    icon: HandCoins
                },
                {
                    name: "Donation Requests",
                    route: `/dashboard/${role}/donation-requests`,
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
            route: `/dashboard/profile`,
            icon: User
        },
        {
            name: "Settings",
            route: `/dashboard/settings`,
            icon: Settings
        }
    );

    return SidebarLinks;
};
