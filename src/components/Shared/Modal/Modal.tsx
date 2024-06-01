"use client";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import * as React from 'react';

interface IEssenceModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    children:React.ReactNode
    title?:string;
}

const EssenceModal: React.FunctionComponent<IEssenceModalProps> = ({isOpen,onOpenChange,children,title}) => {
  return <>
      <Modal className='min-w-[600px]' backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}>

            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className='flex gap-1 flex-col'>{title}</ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>

                    <ModalFooter>
                        <Button className='bg-coral-50 text-coral-400' onPress={onClose}>Close</Button>
                    </ModalFooter>
                    </>
                )}
            </ModalContent>
     

  </Modal>
  </>;
};

export default EssenceModal;
