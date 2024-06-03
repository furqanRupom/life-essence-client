"use client";
import NotFound from "@/components/notFound/notFound";
import { useGetBloodRequetsQuery } from "@/redux/api/bloodsApi";
import { Avatar, Button, Chip, Switch, Table, TableBody, TableCell,cn, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon, ToggleRightIcon, ToggleLeftIcon } from "lucide-react";
import * as React from 'react';
import EssenceLoader from "@/components/Shared/Loader/Loader";
import BloodRequestModal from "../../user/blood-requests/components/BloodRequestModal";
import { useAllUsersQuery, useToggleUserMutation} from "@/redux/api/userApi";
import AdminDasboardModal from "./AdminDashboardModal";

export const columns = [
    { uid: "image", name: "User Image" },
    { uid: "name", name: "User Name" },
    { uid: "phoneNumber", name: "Phone Number" },
    { uid: "location", name: "User Location" },
    { uid: "actions", name: "Actions" }
];

export const transformData = (data: any) => {
    return data?.map((item: any) => ({
        id: item.id,
        name: item.name,
        email:item.email,
        phoneNumber: item.phoneNumber || 'N/A',
        location: item.location,
        bloodType: item.bloodType,
        emergencyPhoneNumber: item.emergencyPhoneNumber,
        image: item.image,
        status: item.status,
        role: item.role,
        socialMediaMethods: item.socialMediaMethods,
        profile:item.profile
    }));
};

export const statusColorMap = {
    ACTIVATE: "success",
    DEACTIVATE: "danger",
};
export const userStatus  = {
    active:"ACTIVATE",
    deactivate:"DEACTIVATE"
}

export const Role = {
    admin :"ADMIN",
    user:"USER"
}

interface IBloodRequestTableProps { }

const AdminDashboardTable: React.FunctionComponent<IBloodRequestTableProps> = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [userDetails, setDonorDetails] = React.useState({});
    const [updateUser] = useToggleUserMutation();

    const handleStatusToggle = async (user: any) => {
        const newStatus = user.status === "ACTIVATE" ? "DEACTIVATE" : "ACTIVATE";
        const response = await updateUser({ id: user.id, data: { status: newStatus }}).unwrap();
        if(response.success){
            console.log('yes works');
        }
    };

    const handleRoleToggle = async (user: any) => {
        const newRole = user.role === Role.admin ?  Role.user: Role.admin;
        try {
            const response = await updateUser({ id: user.id, data: { role: newRole } }).unwrap();
            if(response.success){
                console.log('yes works');
            }
        } catch (error) {
            console.log(error)
        }
    };

    const renderCell = (user: any, columnKey: any) => {
    
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "image":
                return <Avatar src={cellValue || ""} size="md" className="bg-coral-50 text-coral-400"  />
            case "name":
                return <h3>{cellValue}</h3>;
                return (
                    // @ts-ignore
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-3">
                        <Tooltip content="Details">
                            <Button onClick={() => setDonorDetails(user)} style={{ backgroundColor: "transparent" }} isIconOnly onPress={onOpen} className="text-lg text-success-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip  content="Toggle Status">

                            <Button style={{ backgroundColor: "transparent" }} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Switch onClick={() => handleStatusToggle(user)} color="success" defaultSelected={user.status == userStatus.active ? true : false} classNames={{

                                wrapper: "p-0 h-6  overflow-visible",
                                thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                    //selected
                                    "group-data-[selected=true]:ml-6",
                                    // pressed
                                    "group-data-[pressed=true]:w-7",
                                    "group-data-[selected]:group-data-[pressed]:ml-4",
                                ),
                            }} size="sm" className="text-sm lowercase"></Switch>

                                <Chip className="lowercase" color={user.status == userStatus.active ? 'success' : 'danger'} size="sm">{user.status}</Chip>
                            </Button>
                      
                        </Tooltip>
                        <Tooltip content="Toggle Role">
                            <Button  style={{ backgroundColor: "transparent" }}  className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <Switch onClick={() => handleRoleToggle(user)} color="secondary" defaultSelected={user.role == Role.admin ? true : false} classNames={{

                                    wrapper: "p-0 h-6  overflow-visible",
                                    thumb: cn("w-6 h-6 bg-[#fff] shadow-lg",
                                        //selected
                                        "group-data-[selected=true]:ml-6",
                                        // pressed
                                        "group-data-[pressed=true]:w-7",
                                        "group-data-[selected]:group-data-[pressed]:ml-4",
                                    ),
                                }}  size="sm" className="text-sm lowercase "></Switch>

                                <Chip color={user.role == Role.admin ? 'secondary' : 'default'} size="sm" className="lowercase">{user.role}</Chip>
                            </Button>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };

    const { data: users, isLoading } = useAllUsersQuery({});
    const transformedData = transformData(users || []);

    return (
        <>
            {isLoading ? (
                <EssenceLoader />
            ) : (
                <div className="w-full flex flex-col gap-4">
                    <Table aria-label="Example table with custom cells">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody className="py-5" items={transformedData}>
                            {(item) => (
                                // @ts-ignore
                                <TableRow key={item?.id}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <AdminDasboardModal requestData={userDetails} title="User Details" onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
                </div>
            )}
            {users?.length == 0 ? <NotFound title="No User" /> : null}
        </>
    );
};

export default AdminDashboardTable;
