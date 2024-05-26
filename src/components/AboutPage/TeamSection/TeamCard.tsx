import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface ITeamCard {
    image: string;
    name: string;
    role: string;
    facebookUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
}

const TeamCard: React.FunctionComponent<ITeamCard> = ({ image, name, role, facebookUrl, twitterUrl, linkedinUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <img
                src={image}
                alt={`Team Member ${name}`}
                className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700">{role}</p>
            <div className="flex justify-center mt-4 space-x-4">
                {facebookUrl && (
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <Facebook className="text-coral-400 hover:text-coral-500" />
                    </a>
                )}
                {twitterUrl && (
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <Twitter className="text-coral-400 hover:text-coral-600" />
                    </a>
                )}
                {linkedinUrl && (
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-coral-400 hover:text-coral-500" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
