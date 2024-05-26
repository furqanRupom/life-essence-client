"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { CalendarIcon, MapPinIcon, MapPinned, UserIcon } from 'lucide-react';

interface ICampaignCardProps {
    image: string;
    title: string;
    description: string;
    location: string;
    date: string;
    organizer?: string;
    link?: string;
}

export const CampaignCard: React.FunctionComponent<ICampaignCardProps> = ({ image, title, description, location, date, organizer, link }) => {
    return (
        <Card className="max-w-[400px] shadow-md">
            <Image
                alt={title}
                className="rounded-t-lg  lg:h-52 w-[100%] "
                height={200}
                src={image}
             
            />
            <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <Divider />
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <MapPinned className="h-5 w-5 text-coral-400" />
                        <p className="text-sm font-semibold text-coral-400">{organizer}</p>
                    </div>
                    <Link
                        isExternal
                        href={link}
                        className="text-sm text-coral-500 cursor-pointer hover:underline"
                    >
                        Read More
                    </Link>
                </div>
            </CardBody>
        </Card>
    );
}

export default CampaignCard;
