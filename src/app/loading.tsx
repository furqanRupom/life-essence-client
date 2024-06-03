import Image from 'next/image';
import * as React from 'react';

interface ILoadingPageProps {
}

const LoadingPage: React.FunctionComponent<ILoadingPageProps> = (props) => {
  return <section className='absolute w-full h-full flex items-center justify-center z-[90] bg-[#fff] py-40'>

      <Image width={500} height={500} src="https://loading.io/assets/mod/spinner/gear-set/lg.gif" alt="logo" />
  
  </section>;
};

export default LoadingPage;
