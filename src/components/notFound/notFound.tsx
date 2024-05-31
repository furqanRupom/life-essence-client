import * as React from 'react';
import notfoundImg from "../../assets/images/notFound.png"
import Image from 'next/image';


interface INotFoundProps {
    title?:string;
}

const NotFound: React.FunctionComponent<INotFoundProps> = ({title}) => {
  return <section className='flex items-center justify-center py-5 '>
      <div className='relative'>
          <Image src={notfoundImg as unknown as string} alt='not found' />
          <h3 className='py-3 text-2xl  font-extrabold text-default-400 absolute text-center w-full bottom-0'>{title}</h3>
 </div>
  

  </section>;
};

export default NotFound;
