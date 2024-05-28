"use client";
import { Button, Card, Image } from '@nextui-org/react';
import * as React from 'react';
interface IInfoCardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    icon: any;
}

const InfoCard: React.FunctionComponent<IInfoCardProps> = (info) => {
    return (
        <Card className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <Image className="w-[100%]   lg:h-[280px]  object-cover" src={info.imageUrl} alt={info.title} />
            <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-coral-50">
                    <info.icon className="text-coral-400"></info.icon>

                </div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">{info.title}</h2>
                <p className="text-gray-700">{info.description}</p>
            </div>
            <div className="flex  p-4 0">
                <Button
                    href="#"
                    className="px-4 py-2 font-semibold text-white transition-colors duration-200 bg-coral-50 rounded text-coral-400"
                >
                    {info.buttonText}
                </Button>
            </div>
        </Card>
    );
};

export default InfoCard