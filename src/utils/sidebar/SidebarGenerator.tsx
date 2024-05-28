import { HandCoins, Library, Shapes, SquareMousePointer, User, Users } from "lucide-react";

export type Role = "ADMIN" | "USER";

export const SidebarGenerator = (role: Role) => {
    let SidebarLinks = [];

    switch (role) {
        case 'ADMIN':
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

        case 'USER':
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
            SidebarLinks.push({
                name: "Profile",
                route: `/${role}/profile`,
                icon: User
            });
            break;
    }

    return SidebarLinks; // Ensure SidebarLinks is returned
};
