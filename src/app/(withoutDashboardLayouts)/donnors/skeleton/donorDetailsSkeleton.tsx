"use client";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DonorDetailsSkeleton = () => (
    <section className='min-h-screen'>
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-4xl mt-8">
            <Skeleton width={150} height={20} className="mb-4" />
            <div className="flex flex-col lg:flex-row justify-center space-x-12">
                <div className="flex flex-col items-center">
                    <Skeleton circle={true} height={160} width={160} className="mb-4" />
                    <Skeleton width={200} height={20} className="mb-2" />
                    <Skeleton width={100} height={30} className="mt-4" />
                </div>
                <div className="flex flex-col pt-10">
                    <Skeleton width={300} height={30} className="mb-2" />
                    <Skeleton width={250} height={20} className="mb-2" />
                    <Skeleton width={250} height={20} className="mb-2" />
                    <Skeleton width={300} height={20} className="mb-2" />
                    <Skeleton width={300} height={20} className="mb-2" />
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <Skeleton width={200} height={40} />
            </div>
        </div>
    </section>
);

export default DonorDetailsSkeleton;
