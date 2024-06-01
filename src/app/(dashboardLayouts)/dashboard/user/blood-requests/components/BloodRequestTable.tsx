"use client";
import NotFound from "@/components/notFound/notFound";
import { useGetBloodRequetsQuery } from "@/redux/api/bloodsApi";
import { Avatar, Button, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";
import * as React from 'react';
import BloodRequestModal from "./BloodRequestModal";
import EssenceLoader from "@/components/Shared/Loader/Loader";

export const columns = [

    { uid: "donorName", name: "Donor Name" },
    { uid: "phoneNumber", name: "Phone Number" },
    { uid: "dateOfDonation", name: "Date of Donation" },
    { uid: "hospitalName", name: "Hospital Name" },
    { uid: "reason", name: "Reason" },
    { uid: "requestStatus", name: "Status" },
    { uid: "actions", name: "Actions" }
];
export const transformData = (data: any) => {
    return data?.map((item: any) => ({
        donorName: item.donor.name,
        phoneNumber: item.donor.phoneNumber || 'N/A',
        dateOfDonation: item.dateOfDonation,
        timeOfDonation :item.timeOfDonation,
        hospitalName: item.hospitalName,
        hospitalAddress:item.hospitalAddress,
        reason: item.reason,
        requestStatus: item.requestStatus,
        donor:item.donor
    }));
};



export const statusColorMap = {
    PENDING: "warning",
    APPROVED: "success",
    REJECTED: "danger",
};



interface IBloodRequestTableProps {
  
}

const BloodRequestTable: React.FunctionComponent<IBloodRequestTableProps> = () => {
    const {isOpen, onOpen, onOpenChange } = useDisclosure();
    const [donorDetails,setDonorDetails ] = React.useState({});

        
    const renderCell = (user: any, columnKey: any) => {
        console.log(user);
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "donorName":
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
                            <Button onClick={()=> setDonorDetails(user)} style={{
                                backgroundColor:"transparent"
                            }} isIconOnly onPress={onOpen}  className="text-lg text-success-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Approve Request">
                            <Button style={{
                                backgroundColor: "transparent"
                            }} isIconOnly className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip  color="danger" content="Delete request">
                            <Button style={{
                                backgroundColor: "transparent"
                            }} isIconOnly className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </Button>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    };
    const { data: RequestByMe,isLoading } = useGetBloodRequetsQuery({});



  
   
    const transformedData = transformData(RequestByMe || []);

  return <>

 
   {
    isLoading ? <EssenceLoader /> : 

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
                              <TableRow key={item?.donorName}>
                                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                              </TableRow>
                          )}

                      </TableBody>
                      
                  </Table>
                  <BloodRequestModal  requestData={donorDetails} title="Donor Details" onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />

    </div>
              
   }
      {RequestByMe?.length == 0 ? <NotFound title="No Blood Request " /> : null}

     

  </>;
};

export default BloodRequestTable;

