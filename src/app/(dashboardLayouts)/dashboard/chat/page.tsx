"use client";
import React from 'react';
import { Info, MessageCircle, Paperclip, Phone, Smile, Video } from 'lucide-react';
import { Avatar, Button, Input } from '@nextui-org/react';
import ChatMessageList from './components/ChatMessage';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
 // Import the ChatMessageList component

const MessengerChat = () => {
    // Mock messages for blood donation chat
    const conversations = [
        { initials: 'JC', name: 'John Doe', unread: 3 },
        { initials: 'MS', name: 'Mary Smith', unread: 0 },
        { initials: 'AB', name: 'Adam Brown', unread: 1 },
    ];
    const { data, isLoading } = useGetMyProfileQuery({});
    const messages = [
        { text: "Hi, I'm interested in donating blood. Can you provide me with more information?", sender: "user" },
        { text: "Sure! We greatly appreciate your willingness to donate. Here's what you need to know:", sender: "Blood Bank" },
        { text: " Make sure you meet the eligibility criteria for blood donation.", sender: "Blood Bank" },
        { text: " Schedule an appointment at your nearest blood donation center.", sender: "Blood Bank" },
        { text: " Bring a valid ID and get ready to save lives!", sender: "Blood Bank" },
        { text: "Got it! Thank you for the information.", sender: "user" },
        { text: "You're welcome! Feel free to ask if you have any more questions.", sender: "Blood Bank" }
    ];

    return (
        <div className="flex min-h-screen h-full antialiased text-default-600 md:mx-12 my-3 ">
            <div className="flex flex-col  lg:flex-row h-full w-full gap-5  lg:gap-12  overflow-x-hidden px-8 lg:px-0">
                <div className="flex flex-col  py-8 pl-6 pr-2  lg:w-64 bg-[#fff] flex-shrink-0 bg-opacity-20 rounded-3xl shadow">
                    <div className="flex flex-row items-center justify-center  lg:h-12 w-full ">
                        <div className="flex items-center justify-center rounded-2xl text-coral-700 bg-coral-100 h-10 w-10">
                            <MessageCircle className="w-6 h-6 text-coral-400" />
                        </div>
                        <div className="ml-2 font-bold text-coral-400 text-2xl">Essence Chat</div>
                    </div>
                    <div className="flex flex-col items-center bg-coral-100 bg-coral-600 bg-opacity-10  mt-4 w-full py-6 px-4 rounded-lg overflow-hidden">
                        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' className='w-20 h-20 bg-coral-400 text-coral-50' />
                      {
                            !isLoading &&   <>
                                <div className="text-sm font-semibold mt-2">{data?.name}</div>
                                <div className="text-xs text-gray-500">{data?.email}</div>
                            </>
                      }
                        <div className="flex flex-row items-center mt-3">
                            <div className="flex flex-col justify-center h-4 w-8 bg-coral-50 rounded-full">
                                <div className="h-3 w-3 bg-success-400 rounded-full self-end mr-1" />
                            </div>
                            <div className="leading-none ml-1 text-xs">Active</div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-row items-center justify-between text-xs">
                            <span className="font-bold">Active Conversations</span>
                            <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                                {conversations.length}
                            </span>
                        </div>
                        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                            {conversations.map((conversation, index) => (
                                <button key={index} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                    <Avatar  className="w-8 h-8 bg-coral-400 text-coral-50">{conversation.initials}</Avatar>
                                    <div className="ml-2 text-sm  font-semibold">{conversation.name}</div>
                                    <div className="flex items-center justify-center ml-auto text-xs text-white bg-coral-50 text-coral-500 h-4 w-4 rounded leading-none">
                                        {conversation.unread}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden flex-auto h-full border border-coral-300 rounded-3xl bg-coral-50 bg-opacity-10 ">
                    <div className='bg-[#fff] mx-5 my-3 flex  justify-between p-3 rounded-3xl'>
                    <div className='flex items-center  gap-3'>
                            <Avatar className='ring ring-coral-400' src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg' />
                            <div>
                                <h3>Alexander The great</h3>
                                <small className='text-success-400 font-semibold'>Active Now</small>
                            </div>
                    </div>

                    <div className='flex items-center space-x-3 text-coral-400 '>
                        <Phone />
                        <Video />
                        <Info />
                    
                    </div>
                    </div>
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        <ChatMessageList messages={messages} /> {/* Render the ChatMessageList component with mock messages */}
                        <div className="flex z-50 flex-row items-center h-16 rounded-xl bg-[#fff] w-full px-4">
                            <div>
                                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                                    <Paperclip className="w-5 h-5 text-coral-400" />
                                </button>
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <Input
                                        style={{
                                            background: "transparent",
                                        }}
                                        variant='faded'
                                        type="text"
                                        className="flex w-full  rounded-xl focus:outline-none focus:-coral-300 pl-4 h-10"
                                    />
                                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                        <Smile className="w-6 h-6 text-coral-400" />
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <Button className="flex items-center justify-center  rounded-xl text-xl bg-coral-50 text-coral-400 px-4 py-1 flex-shrink-0">
                                    <span>Send</span>
                                    <Paperclip className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessengerChat;
