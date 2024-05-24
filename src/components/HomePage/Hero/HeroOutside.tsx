"use client";
import { CircleHelp, GlassWater, MapPin, PaintBucket, TestTubes } from 'lucide-react';
import * as React from 'react';

interface IHerOutSideProps {
}

const HeroOutSide: React.FunctionComponent<IHerOutSideProps> = (props) => {
    const questions = [
        {
            question:"Can I give blood ?",
            icon:CircleHelp
        },
        {
            question:"Where to give blood ?",
            icon:MapPin
        },
        {
            question:"Icon dependicy",
            icon:TestTubes
        },
        {
            question:"Prepare and aftercare",
            icon:GlassWater
        },
        {
            question:"How to give blood",
            icon:PaintBucket
        }
    ]
  return <section className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      justify-items-center text-center gap-5'>
        {
              questions.map((qe) => <div className='cursor-pointer'  key={qe.question}>
                <div>
                      <div className=' text-coral-400 hover:bg-coral-500 duration-200 hover:text-coral-50  bg-coral-50 rounded-full p-3 w-fit mx-auto'>
                          <qe.icon className='text-center ' size={40}></qe.icon>
                    </div>
                    <h3 className='text-center hover:text-default-900  lg:text-md pt-3 text-default-600 font-semibold'>{qe.question}</h3>
                </div>
            </div>)
        }
    </div>
  </section>;
};

export default HeroOutSide;
