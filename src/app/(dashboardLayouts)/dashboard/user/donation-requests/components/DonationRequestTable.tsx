"use client";
import * as React from 'react';
import { useDonorRequestQuery, useGetBloodRequetsQuery } from "@/redux/api/bloodsApi";
import { Avatar, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";
import { statusColorMap } from '../../blood-requests/components/BloodRequestTable';
interface IDonationRequestTableProps {
}

export const columns = [

    { uid: "requesterName", name: "Requester Name" },
    { uid: "phoneNumber", name: "Phone Number" },
    { uid: "dateOfDonation", name: "Date of Donation" },
    { uid: "hospitalName", name: "Hospital Name" },
    { uid: "reason", name: "Reason" },
    { uid: "requestStatus", name: "Status" },
    { uid: "actions", name: "Actions" }
];

export const transformData = (data: any) => {
    return data.map((item: any) => ({
        requesterName: item.requester.name,
        phoneNumber: item.phoneNumber,
        dateOfDonation: item.dateOfDonation,
        hospitalName: item.hospitalName,
        reason: item.reason,
        requestStatus: item.requestStatus,
    }));
};


const DonationRequestTable: React.FunctionComponent<IDonationRequestTableProps> = (props) => {
    const renderCell = (user: any, columnKey: any) => {
        const cellValue = user[columnKey];


        switch (columnKey) {
            case "requesterName":
                return (
                    <h3>{cellValue}</h3>
                );
            case "requestStatus":
                return (
                    // @ts-ignore
                    <Chip className="capitalize" color={statusColorMap[user.requestStatus]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-3">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Approve Request">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete request">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };
    const { data: donorRequets,isLoading } = useDonorRequestQuery({});
    const transformedData = transformData(donorRequets || []);
    return <>
        {
            isLoading ? <></> :
                <div className=" w-full flex flex-col gap-4">
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
                                <TableRow key={item?.requesterName}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>

        }
    </>;
};

export default DonationRequestTable;
