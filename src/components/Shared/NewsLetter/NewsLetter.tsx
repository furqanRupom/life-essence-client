import React from 'react';
import { Mail, Heart } from 'lucide-react';

const NewsletterSection: React.FC = () => {
    return (
        <div className="bg-coral-300 bg-opacity-25 relative  py-10 my-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-8  md:mx-auto rounded-3xl">
            <div className=" grid  lg:grid-cols-2 items-center  text-center ">
                <div className='lg:text-left'>

                
                <h2 className=" text-2xl md:text-3xl leading-9 font-extrabold text-gray-900 sm:text-3xl sm:leading-10">
                    Join Our Life-Saving Community
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-600">
                    Sign up for our newsletter to stay updated on upcoming blood drives,
                    success stories, and ways you can help save lives.
                </p>

                </div>

                <form className="mt-8 sm:flex justify-center  lg:block ">
                    <input
                        type="email"
                        className="w-full  px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-50 focus:border-transparent sm:max-w-xs"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md hover:shadow-lg transform transition duration-300 ease-in-out"
                    >
                        <Mail className="h-5 w-5 inline mr-2" /> Subscribe
                    </button>
                </form>
            </div>
         
        </div>
    );
};

export default NewsletterSection;
