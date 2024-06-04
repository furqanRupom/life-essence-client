import React from 'react';
import { AlarmSmoke, AreaChart, CircleArrowOutUpRight, AlignEndHorizontal } from 'lucide-react';
import Title from '@/components/reusable/Title';

interface IDonationTipsProps {
    // Add any props that you need here
}

const DonationTips: React.FC<IDonationTipsProps> = () => {
    return (
        <section className="bg-default-50 py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">

                    <Title firstTitle=' Blood Donation Tips' secondTitle='Make a difference in just 4 easy steps' />
              
                    <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-default-700 lg:text-xl lg:leading-8">
                        By donating blood, you can help save up to three lives. Here are some simple steps to make it happen.
                    </p>
                </div>
                <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
                    {steps.map((step) => (
                        <li key={step.id} className="flex-start group relative flex lg:flex-col">
                            <span
                                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-default-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"
                            />
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-default-300 bg-default-50 transition-all duration-200">
                                {step.icon}
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3 className="text-xl font-bold text-default-900 before:mb-2 before:block before:font-mono before:text-sm before:text-default-500">
                                    {step.title}
                                </h3>
                                <h4 className="mt-2 text-base text-default-700">{step.description}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const steps = [
    {
        id: 1,
        title: 'Check Your Eligibility',
        description: 'Make sure you meet the eligibility criteria for blood donation.',
        icon: <CircleArrowOutUpRight />,
    },
    {
        id: 2,
        title: 'Schedule Your Appointment',
        description: 'Book an appointment at your nearest blood bank or hospital.',
        icon: <AlignEndHorizontal />,
    },
    {
        id: 3,
        title: 'Prepare for Your Donation',
        description: 'Drink plenty of water and eat a light meal before donating blood.',
        icon: <AlarmSmoke />,
    },
    {
        id: 4,
        title: 'Get Your Blood Donation Certificate',
        description: 'Receive a certificate after your donation, which can be used for tax purposes.',
        icon: <AreaChart />,
    },
];

export default DonationTips;