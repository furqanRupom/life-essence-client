import React from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import Title from '@/components/reusable/Title';

const ContactForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl w-full space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className=" p-8 shadow-md rounded-md order-2 lg:order-none">
                        <Title firstTitle="Get In Touch" secondTitle='Contact with us ' />
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              
                                <Input   style={{
                                    backgroundColor:"transparent"
                                }}
                              
                               
                                  className='bg-background'
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    fullWidth
                                    required
                                     variant='faded'
                                   
                                />
                                <Input   style={{
                                    backgroundColor:"transparent"
                                }}
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    fullWidth
                                    required
                                     variant='faded'
                                />
                            </div>
                            <Input   style={{
                                    backgroundColor:"transparent"
                                }}
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                fullWidth
                                required
                                 variant='faded'
                            />
                            <Input   style={{
                                    backgroundColor:"transparent"
                                }}
                                label="Subject"
                                placeholder="Enter subject"
                                fullWidth
                                required
                                 variant='faded'
                            />
                            <Textarea style={{
                                backgroundColor:"transparent"
                            }}
                                label="Message"
                                placeholder="Enter your message"
                                fullWidth
                                required
                                 variant='faded'
                            />
                            <Button  className="w-full bg-coral-50 text-coral-400 text-xl font-semibold ">
                                Submit Request
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-col text-white p-8 py-20  shadow-md rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Blood Excellence!</h2>
                        <p className=" text-xl font-semibold">
                            Expanded Blood Donate Services Here
                        </p>
                        <p className="text-md ">
                            On the other hand  we emphatically denounce with righteous indignation those who allow themselves to be beguiled and demoralized by superficial charms and deceptive allurements. It is a cause for concern when individuals  entranced by fleeting attractions lose sight of deeper values and principles. These men seduced by the glittering facade of temporary pleasures often stray from the path of integrity and virtue. 
                        </p>
                      <div className='mt-5'>
                         
                            <ul className="space-y-2 text-xl ">
                                <li><strong>Emergency Line:</strong> (002) 012612457</li>
                                <li><strong>Location:</strong> Street 68  Mahattan  New York</li>
                                <li><strong>Hours:</strong> Mon - Fri: 8:00 am - 7:00 pm</li>
                            </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
