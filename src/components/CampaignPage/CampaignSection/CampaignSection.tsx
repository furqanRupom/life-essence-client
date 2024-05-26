import * as React from 'react';
import CampaignCard from './CampaignCard';
import Title from '@/components/reusable/Title';

interface ICampaignSectionProps {
}

const campaigns = [
    {
        image: "https://plus.unsplash.com/premium_photo-1663958025602-593e65ef3c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb29kJTIwZG9uYXRpb24lMjBjYW1wYWlnbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "World Donors Day",
        description: "Join us in celebrating the spirit of giving and saving lives through blood donation.",
        location: "Central Park, New York",
        organizer:"Life Essence",
        date: "June 14, 2024"
    },
    {
        image: "https://media.istockphoto.com/id/1313266447/photo/feeling-cheerful-and-ready-to-workout.webp?s=170667a&w=0&k=20&c=nKD17FVeGYmn9YynHPxwVZsEjrSPNTgI4k9mVGKRSC4=",
        title: "Health Awareness Camp",
        description: "A camp to raise awareness about the importance of health and wellness.",
        location: "Community Hall, Los Angeles",
        organizer: "Life Essence",
        date: "July 21, 2024"
    },
    {
        image: "https://images.unsplash.com/photo-1591901206069-ed60c4429a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb29kJTIwZG9uYXRpb24lMjBjYW1wYWlnbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Environmental Protection Rally",
        description: "Join us to promote and support environmental protection initiatives.",
        location: "Beach Front, Miami",
        organizer: "Life Essence",
        date: "August 12, 2024"
    },
    {
        image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb29kJTIwZG9uYXRpb24lMjBjYW1wYWlnbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Educational Support Fundraiser",
        description: "Help us raise funds to support education for underprivileged children.",
        location: "City Library, Boston",
        organizer: "Life Essence",
        date: "September 5, 2024"
    },
    {
        image: "https://images.unsplash.com/photo-1542884841-9f546e727bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymxvb2QlMjBkb25hdGlvbiUyMGNhbXBhaWdufGVufDB8fDB8fHww",
        title: "Animal Shelter Charity Run",
        description: "Participate in our charity run to support the local animal shelter.",
        location: "Green Park, San Francisco",
        organizer: "Life Essence",
        date: "October 10, 2024"
    },
    {
        image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymxvb2QlMjBkb25hdGlvbiUyMGNhbXBhaWdufGVufDB8fDB8fHww",
        title: "Winter Clothing Drive",
        description: "Donate your gently used winter clothing to help those in need.",
        location: "Downtown Center, Chicago",
        organizer: "Life Essence",
        date: "November 15, 2024"
    }
]

const CampaignSection: React.FunctionComponent<ICampaignSectionProps> = (props) => {
    return (
        <section >
            <Title firstTitle='Campaign' secondTitle='Our recent campaign' />
            <div className='max-w-5xl mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {campaigns.map((campaign, index) => (
                    <CampaignCard
                        key={index}
                        image={campaign.image}
                        title={campaign.title}
                        description={campaign.description}
                        location={campaign.location}
                        organizer={campaign.organizer}
                        date={campaign.date}
                    />
                ))}
          </div>
        </section>
    );
};

export default CampaignSection;
