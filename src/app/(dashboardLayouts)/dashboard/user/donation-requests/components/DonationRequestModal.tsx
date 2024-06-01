"use client";
import EssenceModal from '@/components/Shared/Modal/Modal';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from '@nextui-org/react';
import { Droplet } from 'lucide-react';
import * as React from 'react';
import { statusColorMap } from '../../blood-requests/components/BloodRequestTable';
import { requestConstantStatus } from '@/constants/constant';
import { useUpdateRequestStatusMutation } from '@/redux/api/bloodsApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


interface IDonationRequestModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    onClose: () => void;
    title?: string;
    donationData: any;
}

const DonationRequestModal: React.FunctionComponent<IDonationRequestModalProps> = ({ isOpen, onOpen, onOpenChange, title, donationData,onClose }) => {
    const router = useRouter()


    const [updateRequestStaus,{isLoading}] = useUpdateRequestStatusMutation()

    const isStatus = donationData?.requestStatus == requestConstantStatus.approved || donationData?.requestStatus == requestConstantStatus.rejected;



    // update status;

    const handleStatus = async(status:string) => {
        try {

            const response = await updateRequestStaus({data:{requestStatus:status},id:donationData.requester.id}).unwrap();

            if(response){
                toast.success(`Status ${status.toLocaleLowerCase()} is Successfully `);
                router.refresh();
                onClose();
            }
        } catch (error:any) {
            toast.error(error?.message);
            onClose();
        }

    }


    return <EssenceModal isOpen={isOpen} onOpen={onOpen}  onOpenChange={onOpenChange} title={title}>
        <Card className="shadow-none">
            <CardHeader className="flex flex-col items-center bg-red-500 text-white p-4 rounded-t-lg">
                <Avatar isBordered radius="full" className="w-28 h-28 ring ring-coral-400 mb-3" src={donationData?.requester?.image || "https://nextui.org/avatars/avatar-1.png"} />
                <h4 className="text-2xl font-semibold">{donationData?.requesterName}</h4>
                <h5 className="text-lg">{donationData?.requester?.email}</h5>
                {/* @ts-ignore */}
                <Chip className="capitalize py-3" color={statusColorMap[donationData?.requestStatus]} size="sm" variant="flat">
                    {donationData?.requestStatus}
                </Chip>
                <Button className="mt-2  text-white bg-coral-50 text-coral-400 border-white border-2">
                    <strong className="text-2xl">{makeBloodGroups(donationData?.requester?.bloodType)}</strong> <Droplet size={24} />
                </Button>
            </CardHeader>
            <CardBody className="px-6 py-4">
                <div className="mb-4">
                    <h3 className="font-semibold text-lg">Hospital Information</h3>
                    <Divider className="my-2" />
                    <p><strong>Name:</strong> {donationData?.hospitalName}</p>
                    <p><strong>Address:</strong> {donationData?.hospitalAddress}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Donation Details</h3>
                    <Divider className="my-2" />
                    <p><strong>Date:</strong> {donationData?.dateOfDonation}</p>
                    <p><strong>Time:</strong> {donationData?.timeOfDonation}</p>
                </div>
            </CardBody>

            <CardFooter>
                <div className='flex items-center justify-center  space-x-5 w-full'>
                    <Button onPress={onOpen} onClick={() => handleStatus(requestConstantStatus.approved)} isDisabled={isStatus} className='bg-success-400 py-3 text-default-50 font-semibold text-md '>Approve Request</Button>
                    <Button onPress={onOpen} onClick={() => handleStatus(requestConstantStatus.rejected)}  isDisabled={isStatus}  className='bg-danger-400 py-3 text-default-50 font-semibold text-md '>Reject Request</Button>
                </div>
            </CardFooter>

        </Card>
    </EssenceModal>;
};

export default DonationRequestModal;
