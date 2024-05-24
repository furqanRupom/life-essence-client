"use client";
import { Button } from '@nextui-org/react';
import * as React from 'react';

interface IServiceCardProps {
    number: number;
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
}

const ServiceCard: React.FunctionComponent<IServiceCardProps> = ({
    number,
    title,
    description,
    imageUrl,
    buttonText,
}) => {
    return (
        <div className={`flex flex-col ${Number(number % 2) === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start lg:max-w-5xl mx-auto mb-12 py-4 gap-5`}>
            <img className="w-full lg:w-1/2 h-48 lg:h-72 gap-5 object-cover rounded-lg" src={imageUrl} alt={title} />
            <div className={`${Number(number % 2) === 0 ? "text-right":"text-left"}`}>
                <h3 className="text-coral-400 text-6xl font-bold opacity-20">{number}</h3>
                <h2 className="text-2xl font-semibold text-gray-900 mt-2">{title}</h2>
                <p className="mt-4 text-xl  text-default-600">{description}</p>
                <Button
                    href="#"
                    className="mt-4 inline-block px-4 py-2 font-semibold  bg-coral-50 text-coral-400 rounded  transition-colors duration-200"
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};
export default ServiceCard