import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

type EventCardProps = {
    date: string;
    time: string;
    location: string;
    image: string;
    title: string;
    description:string;
};

const EventCard: React.FC<EventCardProps> = ({ date, time, location, image, title, description }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="">
           

                <div className='grid grid-cols-2'>

                <div className="flex items-center text-gray-700 mb-2 bg-coral-300 p-3">
                    <Calendar className="w-5 h-5 mr-1 " />
                    <span className='mt-1'>{date}</span>
                </div>
                <div className="flex items-center text-gray-700 mb-2 bg-coral-400 p-3">
                    <Clock className="w-5 h-5 mr-1" />
                        <span className='mt-1'>{time}</span>
                </div>
                </div>
                <div className="flex items-center justify-center text-gray-700 bg-coral-50 -mt-2 p-4">
                    <MapPin className="w-6  h-6 mr-1" />
                    <span className='text-lg'>{location}</span>
                </div>
                <h3 className="text-lg text-default-600 font-semibold mb-2 px-5 py-2 ">{title}</h3>
                <p className='text-defualt-400 px-5 py-1 leading-relaxed'>{description}</p>
            </div>
        </div>
    );
};

export default EventCard;
