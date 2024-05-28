import { Button, Image } from '@nextui-org/react';
import { ArrowRight } from 'lucide-react';
import * as React from 'react';

interface ICardProps {
    image?:string;
    title?:string;
    subTitle?:string;
    descrption?:string;
    buttonText?:string;
    isOrder?:boolean;
}

const SuperCard: React.FunctionComponent<ICardProps> = ({image,title,descrption,buttonText,isOrder,subTitle}) => {
  return <>
  
      <div className='grid  lg:grid-cols-2 mx-12 lg:mx-0 items-center justify-items-center gap-10'>
          <div className={isOrder ? "order-2" : "order-none"}>
              <Image className={` lg:h-96 mr-auto ${isOrder ? "order-2" : "order-none"}`} src={`${image || "https://img.freepik.com/premium-photo/group-people-blood-donation-concept_1134-17446.jpg"}`} alt='about page image' />
         </div>

          <div className='mt-5 '>
              <h3 className='text-md text-default-600 text-4xl font-bold'>{title || "Life + Essence"}</h3>
              <h1 className='text-xl text-coral-400 py-2 '> {subTitle || "A name that lives depend on"}</h1>

              <p className='text-md leading-relaxed'>{descrption || "At Life Essence, we're here for all Peoples. And although our life-giving role started 90 years ago with blood donations today we support more people in more ways than ever before."}</p>

              <Button size='lg' className='text-coral-400 bg-coral-50 mt-5 font-semibold text-lg py-2'>{buttonText || "Know who we are"} <ArrowRight /></Button>

          </div>
      </div>
  </>;
};

export default SuperCard;
