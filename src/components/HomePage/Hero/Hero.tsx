"use client";
import { Image } from '@nextui-org/react';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { HeroContent } from './HeroContent';
import HeroOutSide from './HeroOutside';

interface IAppProps {
}

const Hero: React.FunctionComponent<IAppProps> = (props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false })
  return <>
    <section>

      <div className="embla " ref={emblaRef}>
        <div className="embla__container  text-default-600">
          <div className="embla__slide">
            <HeroContent title='Give the Gift of Life' description='Join our mission at Life Essence Blood Donation to save lives one pint at a time. Your donation can make a difference for those in need. Be a hero today and give the gift of life.' backgroundImage='https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D' />

          </div>
          <div className="embla__slide">
            <HeroContent isRowReverse={true} styleProps={{
              transform:"scaleX(-1)"
            }} title='Together We Save Lives' description=' At Life Essence we believe in the power of community. By donating blood you are helping to ensure that hospitals have the supplies they need. Together, we can make a life-saving impact.' backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzyDD6_aceQIG22GCl9V55ip_4IBtNuuCZp7froLShxYXhFP0JRN4tAA0YdQnhi6d2uI&usqp=CAU' />
          </div>
          <div className="embla__slide">
            <HeroContent title='Your Blood Their Hope' description='Life Essence  is dedicated to providing hope through the generosity of donors like you. Each donation is a beacon of hope for patients in critical need. Join us in making a difference today' backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZtzOK7grtWz_nI_Z9tc28xBJREj-fRnMAcy2Q9_VerOiw2floZ8NHujYvBmqqmtoeIU&usqp=CAU' />
          </div>
        </div>
      </div>

    <HeroOutSide />


    </section>
  </>;
};

export default Hero;
