"use client";
import React from 'react';
import { Avatar } from '@nextui-org/react';

const ChatMessageList = ({ messages }: any) => {
    return (
        <div className="flex flex-col h-full">
            {messages.map((message: any, index: number) => (
                <div key={index} className={`col-start-${message.sender === 'user' ? '6' : '1'} col-end-${message.sender === 'user' ? '13' : '8'} p-3 rounded-lg`}>
                    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-center`}>
                        {message.sender !== 'user' && (
                            <Avatar src='https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg'  className="w-10 h-10 bg-coral-400 text-coral-50">{message.sender}</Avatar>
                        )}
                        <div className={`relative ${message.sender === 'user' ? 'mr-3' : 'ml-3'} text-sm bg-[#fff] py-2 px-4 shadow rounded-xl`}>
                            <div>{message.text}</div>
                            {message.sender !== 'user' && message.status && (
                                <div  className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                                    {message.status}
                                </div>
                            )}
                        </div>
                        {message.sender === 'user' && (
                            <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' className="w-10 h-10 bg-secondary-200 text-secondary-900">{message.sender}</Avatar>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatMessageList;
