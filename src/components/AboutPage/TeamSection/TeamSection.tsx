import React from 'react';
import TeamCard from './TeamCard';
import Title from '@/components/reusable/Title';

const teamMembers = [
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/1.jpg',
        name: 'John Doe',
        role: 'Lead Coordinator',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/4.jpg',
        name: 'Jane Smith',
        role: 'Medical Officer',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/3.jpg',
        name: 'Alex Johnson',
        role: 'Volunteer Coordinator',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/2.jpg',
        name: 'Peter Johnson',
        role: 'Public Relations',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/5.jpg',
        name: 'Emily Brown',
        role: 'Event Planner',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/6.jpg',
        name: 'Michael Davis',
        role: 'Logistics Manager',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/7.jpg',
        name: 'Sarah Johnson',
        role: 'Communications Specialist',
    },
    {
        image: 'https://spacema-dev.com/elevate/assets/images/team/8.jpg',
        name: 'David Wilson',
        role: 'Donor Relations',
    },
];

const TeamSection = () => {
    return (
        <section id="blood-donation-team" className="bg-gray-100 py-10 max-w-7xl mx-auto" >
            <Title firstTitle='Team' secondTitle='Meet our team' /> 
            <div className="container mx-auto px-4">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                            facebookUrl='/'
                            twitterUrl='/'
                            linkedinUrl='/'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
