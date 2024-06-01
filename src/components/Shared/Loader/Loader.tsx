import { Loader2Icon, LoaderIcon } from 'lucide-react';
import * as React from 'react';

interface ILoaderProps {
}

const EssenceLoader: React.FunctionComponent<ILoaderProps> = (props) => {
  return <>
      <div className='flex items-center justify-center py-40'>
          <LoaderIcon className='w-20 h-20 text-coral-400 animate-spin' />
      </div>
  </>;
};

export default EssenceLoader;
