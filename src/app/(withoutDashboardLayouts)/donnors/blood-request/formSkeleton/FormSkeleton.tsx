"use client";
import { Spacer } from '@nextui-org/react';
import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
interface IFormSkletonProps {
}

const FormSkleton: React.FunctionComponent<IFormSkletonProps> = (props) => {
  return <>

      (
      <section className='max-w-5xl mx-auto py-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <Skeleton height={40} />
              <Skeleton height={40} />
          </div>
          <Spacer y={5} />
          <Skeleton height={40} />
          <Spacer y={5} />
          <Skeleton height={40} />
          <Spacer y={5} />
          <Skeleton height={40} />
          <Spacer y={5} />
          <Skeleton height={40} />
          <Spacer y={5} />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <Skeleton height={40} />
              <Skeleton height={40} />
          </div>
          <Spacer y={5} />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <Skeleton height={40} />
              <Skeleton height={40} />
          </div>
          <Spacer y={5} />
          <Skeleton height={40} width='100%' />
      </section>
  
  </>;
};

export default FormSkleton;
