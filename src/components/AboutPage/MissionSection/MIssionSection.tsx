"use client";
import InfoCard from '@/components/HomePage/Info/InfoCard';
import SuperCard from '@/components/reusable/Card';
import Title from '@/components/reusable/Title';
import { Shield } from 'lucide-react';
import * as React from 'react';

interface IMissionSectionProps {
}
const missionStatements = [
    {
        title: "Promote Voluntary Blood Donation",
        description: "Encourage and educate the community about the importance of voluntary blood donation. By providing accurate information and dispelling myths  we aim to increase the number of willing donors and ensure a steady supply of blood for those in need.",
        imageUrl:"https://t4.ftcdn.net/jpg/02/21/47/99/360_F_221479946_2yUmWRmVPBka6d4zcXbBhJbRra8WcpQV.jpg"
    },
    {
        title: "Facilitate Easy and Safe Donations",
        description: "Streamline the donation process through our user-friendly platform  ensuring a seamless experience for donors. We prioritize safety by partnering with certified health organizations and implementing stringent screening procedures to protect both donors and recipients.",
        imageUrl: "https://images.pexels.com/photos/5340279/pexels-photo-5340279.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Support Patients and Families",
        description: "Offer resources and support to patients and their families who require blood transfusions. Through our network  we provide access to vital information  connect patients with donors  and offer emotional and logistical assistance during challenging times.",
        imageUrl: "https://media.istockphoto.com/id/1600613362/photo/heart-teamwork-or-hands-of-doctors-with-support-in-collaboration-for-healthcare-wellness.webp?b=1&s=170667a&w=0&k=20&c=LVtC9aZKBerDq4WRugrk-HrxEDvNb1pODaDOQgNRzxw="
    }
];


const MissionSection: React.FunctionComponent<IMissionSectionProps> = (props) => {
  return <section className='max-w-7xl mx-auto mt-24'>
      <Title firstTitle='Our Mission at Life Essence' secondTitle='Explore our valuable mission' />
     <div className='my-32'>
          <SuperCard title='Be the Lifeline' subTitle='Your Simple Act Can Change Everything' descrption='Join us in our life-saving mission to ensure a steady supply of blood for those in need. Every donation you make can mean the difference between life and death for someone in an emergency undergoing surgery, or battling a chronic illness.' image='https://images.pexels.com/photos/6647175/pexels-photo-6647175.jpeg?auto=compress&cs=tinysrgb&w=600' buttonText='Join the mission' isOrder={true} />
     </div>
      <Title firstTitle="Some of Our Important Mission" secondTitle="Building a Better Future Together" />
      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-8 lg:mx-0 '>

        {
            missionStatements.map((mission) => <InfoCard key={mission.title} title={mission.title} description={mission.description} icon={Shield} buttonText='Read more' imageUrl={mission.imageUrl} />)
        }

      </section>
  </section>;
};

export default MissionSection;
