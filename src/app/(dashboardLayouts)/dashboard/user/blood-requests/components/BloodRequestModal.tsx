import EssenceModal from '@/components/Shared/Modal/Modal';
import { makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Avatar, Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Droplet } from 'lucide-react';
import * as React from 'react';

interface IBloodRequestModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  
    title?: string;
    requestData: any;
}

const BloodRequestModal: React.FunctionComponent<IBloodRequestModalProps> = ({ isOpen, onOpen, onOpenChange, title, requestData }) => {
    return (
        <EssenceModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={title}>
            <Card className="shadow-none">
                <CardHeader className="flex flex-col items-center bg-red-500 text-white p-4 rounded-t-lg">
                    <Avatar isBordered radius="full" className="w-28 h-28 ring ring-coral-400 mb-3" src={requestData?.donor?.image || "https://nextui.org/avatars/avatar-1.png"} />
                    <h4 className="text-2xl font-semibold">{requestData?.donorName}</h4>
                    <h5 className="text-lg">{requestData?.donor?.email}</h5>
                    <Button className="mt-2  text-white bg-coral-50 text-coral-400 border-white border-2">
                        <strong className="text-2xl">{makeBloodGroups(requestData?.donor?.bloodType)}</strong> <Droplet size={24} />
                    </Button>
                </CardHeader>
                <CardBody className="px-6 py-4">
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Hospital Information</h3>
                        <Divider className="my-2" />
                        <p><strong>Name:</strong> {requestData?.hospitalName}</p>
                        <p><strong>Address:</strong> {requestData?.hospitalAddress}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Donation Details</h3>
                        <Divider className="my-2" />
                        <p><strong>Date:</strong> {requestData?.dateOfDonation}</p>
                        <p><strong>Time:</strong> {requestData?.timeOfDonation}</p>
                    </div>
                </CardBody>
            </Card>
        </EssenceModal>
    );
};

export default BloodRequestModal;
