import { Loader2Icon, LoaderIcon } from 'lucide-react';
import * as React from 'react';
import Image from 'next/image';

interface ILoaderProps {
}

const EssenceLoader: React.FunctionComponent<ILoaderProps> = (props) => {
  return <>
    <div className='flex items-center justify-center py-40 min-h-screen'>
      <Image src="https://loading.io/assets/mod/spinner/gear-set/lg.gif" width={400} height={400}
        alt='card pre loader' />
    </div>
  </>;
};

export default EssenceLoader;
