import React from 'react';
import EventCard from './EventCard';
import { Button } from '@nextui-org/react';
import Title from '@/components/reusable/Title';

const events = [
    {
        date: '17-08-2021',
        time: '10 am - 1 pm',
        location: 'RSUP Sanglah',
        image: 'https://images.pexels.com/photos/7446761/pexels-photo-7446761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Blood Donation for Independence Day',
        description: 'Join us in celebrating Independence Day by donating blood and helping save lives at RSUP Sanglah.'
    },
    {
        date: '17-11-2021',
        time: '10 am - 1 pm',
        location: 'RSU Klungkung',
        image: 'https://images.pexels.com/photos/6285378/pexels-photo-6285378.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Woman International Day Blood Donation',
        description: 'Celebrate Women\'s International Day by donating blood and making a difference at RSU Klungkung.'
    },
    {
        date: '09-12-2021',
        time: '10 am - 1 pm',
        location: 'Bunda Medika',
        image: 'https://images.pexels.com/photos/6285373/pexels-photo-6285373.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadg',
        title: 'August Blood Donation Regular Event',
        description: 'Participate in our regular blood donation event this August at Bunda Medika and help save lives.'
    }
];


const EventSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <Title firstTitle='Event' secondTitle='Blood donation event' />
                <div className="flex flex-wrap justify-center">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button className="bg-coral-50 text-coral-400 text-xl font-semibold py-2 px-4 rounded hover:bg-red-700">
                        View More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default EventSection;
