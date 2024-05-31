"use client";
import * as React from 'react';
import Image from 'next/image';
import banner from "../../assets/images/banner.jpg"
import { usePathname } from 'next/navigation';

interface IBannerProps {
    title?:string;
    subTitle?:string;
    backgroundImage?:string;

}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    const pathname = usePathname();
    return <section style={{
        backgroundImage:`url(https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D)`,

    }} className="min-h-[250px] relative bg-no-repeat bg-cover bg-opacity-45 my-20 bg-default-500 flex items-center justify-center">

        <div className='absolute w-full h-full inset-0 bg-default-900 bg-opacity-90'></div>

            <div className='z-10'>


            <h1 className='text-3xl lg:text-5xl font-bold capitalize text-coral-50'>{props.title || pathname.split('/')[1]}</h1>
        
        <h3 className='text-xl lg:text-2xl text-center text-coral-50'>home <span className='text-coral-400'>/{pathname.split('/')[1]}  {props.subTitle && `/${props.subTitle}`}</span></h3>

            </div>
  </section>;
};

export default Banner;
