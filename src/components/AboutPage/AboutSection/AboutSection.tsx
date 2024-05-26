import SuperCard from '@/components/reusable/Card';
import Title from '@/components/reusable/Title';
import { Button, Card, Image } from '@nextui-org/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';

interface IAppProps {
}

const AboutSection: React.FunctionComponent<IAppProps> = (props) => {
    return <section className='max-w-7xl mx-auto'>

 <Title firstTitle='who we are' secondTitle='what we do and why' />
    <SuperCard />
  </section>;
};

export default AboutSection;
