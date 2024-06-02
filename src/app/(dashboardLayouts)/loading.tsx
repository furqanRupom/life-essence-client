import EssenceLoader from '@/components/Shared/Loader/Loader';
import * as React from 'react';

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return <section className='absolute w-full h-full inset-0 bg-coral-50'>

   <EssenceLoader />
  </section>;
};

export default Loading;
