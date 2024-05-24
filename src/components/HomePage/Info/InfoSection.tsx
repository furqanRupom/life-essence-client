"use client";
import * as React from 'react';
import InfoCard from './InfoCard';
import { FileQuestion, HelpCircle, PaintBucket } from 'lucide-react';



const InfoSection: React.FunctionComponent = () => {
    return (
        <section className="py-16 bg-gray-100 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 lg:grid-cols-3">
                    <InfoCard
                        title="Become a Donor"
                        description="Join us and make a difference by donating blood to those in need."
                        imageUrl="https://www.shutterstock.com/image-photo/patient-blood-draw-by-doctor-600nw-1989864818.jpg"
                        buttonText="Read More"
                        icon={FileQuestion}
                    />
                    <InfoCard
                        title="Why Give Blood?"
                        description="Learn about the importance of blood donation and how it saves lives."
                        imageUrl="https://media.istockphoto.com/id/1383899009/photo/preparation-for-blood-test-with-pretty-young-woman-by-female-doctor-medical-uniform-on-the.jpg?s=612x612&w=0&k=20&c=5g88htwZme0CA77hvKbxQ6nPHUA-7qA8xkt5GOc8omQ="
                        buttonText="Read More"
                        icon={PaintBucket}
                    />
                    <InfoCard
                        title="How Donations Help"
                        description="Discover the impact of your donations and hear stories from recipients."
                        imageUrl="https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1708128000&semt=ais"
                        buttonText="Read More"
                        icon={HelpCircle}
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
