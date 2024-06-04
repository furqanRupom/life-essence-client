"use client";
import Banner from '@/components/reusable/Banner';
import { useDonorListQuery } from '@/redux/api/bloodsApi';
import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Avatar, Badge, Input, Select, SelectItem, Chip, Spinner, Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/pagination";
import { IDonor } from '@/interfaces/interfaces';
import { IbloodGroup, makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Droplet, LoaderIcon, MapPin, Search } from 'lucide-react';
import { BloodGroups, availabilites } from '@/constants/constant';
import Link from 'next/link';
import EssenceLoader from '@/components/Shared/Loader/Loader';
import useDebounce from '@/lib/hooks/useDebounce';

interface IDonorsPageProps { }

const DonorsPage: React.FunctionComponent<IDonorsPageProps> = (props) => {
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(10);
  const [bloodType, setBloodType] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [availability, setAvailability] = React.useState<string>('');
  const [donorsData, setDonorsData] = React.useState<IDonor[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [query, setQuery] = React.useState<{ page: number, limit: number, bloodType?: string, location?: string, availability?: string, searchTerm?: string }>({ page, limit });

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const debouncedBloodType = useDebounce(bloodType, 300); // Debounce bloodType state
  const debouncedAvailability = useDebounce(availability, 300); // Debounce availability state

  React.useEffect(() => {
    const newQuery: { page: number, limit: number, bloodType?: string, location?: string, availability?: string, searchTerm?: string } = { page, limit };
    if (debouncedBloodType) newQuery.bloodType = debouncedBloodType; // Use debounced value
    if (location) newQuery.location = location;
    if (debouncedAvailability) newQuery.availability = debouncedAvailability; // Use debounced value
    if (debouncedSearchTerm) newQuery.searchTerm = debouncedSearchTerm;

    // Filter out empty string properties
    const filteredQuery = Object.fromEntries(
      Object.entries(newQuery).filter(([_, v]) => v !== '')
    );
  //  @ts-ignore
    setQuery(filteredQuery);
  }, [page, limit, debouncedBloodType, location, debouncedAvailability, debouncedSearchTerm]);

  const { data, isLoading } = useDonorListQuery(query);
  const donors = data?.donnors;
  const meta = data?.meta;
  const totalPages = Math.ceil((meta?.total || 1) / limit);

  React.useEffect(() => {
    if (donors) setDonorsData(donors);
  }, [donors]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto p-4 min-h-screen">
        <div className="grid grid-cols-[4fr,1fr,1fr] gap-4 mb-4">
          <Input
            size='lg'
            type="text"
            fullWidth
            startContent={
              <Search className='text-coral-400' />
            }
            style={{
              background: "transparent"
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={() => setSearchTerm(debouncedSearchTerm)}
            className=""
            placeholder="Search Donor"
          />
          <Select
            value={bloodType}
            placeholder='Select Blood Group'
            onChange={(e) => setBloodType(e.target.value)}
            onBlur={() => setBloodType(bloodType)}
            size='lg'
          >
            {BloodGroups.map((blood: { name: string, value: string }) => <SelectItem key={blood.name} value={blood.name}>
              {blood.value}
            </SelectItem>)}
          </Select>
          <Select size='lg' placeholder='Choose availability' onChange={(e) => setAvailability(e.target.value)} onBlur={() => setAvailability(availability)}>
            {availabilites.map((avil: { name: string, value: string }) => <SelectItem key={avil.name} value={avil.name}>
              {avil
                .value}
            </SelectItem>)}
          </Select>
        </div>
        {
          donors?.length === 0 && <h3 className='text-center py-5 text-4xl font-bold text-coral-400'>No Donors Found</h3>
        }

        {!isLoading ? (
          <>
            <section className='grid grid-cols-1 py-20 lg:grid-cols-3 gap-5'>
              {donorsData?.map((donor: any) => (
                <div key={donor.id}>
                  <div className=" ">
                    {/* Card start */}
                    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 overflow-hidden shadow-md my-3 p-4 rounded-3xl">
                      <div className=" ">
                        <div className="text-center my-4">
                          <img
                            className="h-48 w-48 rounded-full border-4 border-coral-400 object-cover mx-auto my-4"
                            src={donor.image || "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg"}
                            alt=""
                          />
                          <div className="py-2">
                            <Chip className={`text-default-50 ${donor.availability ? 'bg-success-400' : 'bg-coral-400'}`} size='sm'  >
                              {donor.availability ? "Available" : "Unavailable"}
                            </Chip>
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white my-2">
                              {donor?.name}
                            </h3>

                            <h3 className="font-semibold text-sm text-default-600  py-1">
                              {donor?.email}
                            </h3>
                            <div className="flex text-default-600  space-x-3 items-center justify-center">
                              <h3 className='flex '> <span><MapPin size={20} /></span>
                                <span>{donor?.location}</span></h3>
                              <div className='h-4 w-[0.11rem] bg-default-600'></div>


                              {/* @ts-ignore */}
                              <h3 className='flex '><span><Droplet size={20} /> </span> <span className=''>{makeBloodGroups(donor?.bloodType)}</span></h3>
                            </div>

                          </div>
                        </div>
                        <div className="flex gap-2 px-2 justify-center">
                          <Link href
                            ={`/donnors/${donor.id}`}>
                            <Button className="bg-coral-50 uppercase font-semibold text-coral-400">
                              Details
                            </Button>
                          </Link>
                          <Link href={`/donnors/blood-request/${donor.id}`}>
                            <Button className="bg-coral-50 uppercase font-semibold text-coral-400">
                              Request
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <div className="flex justify-center mt-4">
              <Pagination
                classNames={{
                  cursor: "bg-coral-400"
                }}
                loop showControls
                total={totalPages}
                initialPage={page}
                onChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <EssenceLoader />
        )}
      </div>
    </>
  );
};

export default DonorsPage;