"use client";
import Banner from '@/components/reusable/Banner';
import { useDonorListQuery } from '@/redux/api/bloodsApi';
import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider,  Avatar, Badge, Input, Select, SelectItem, Chip, Spinner } from "@nextui-org/react";
import { Pagination } from "@nextui-org/pagination";
import { IDonor } from '@/interfaces/interfaces';
import { IbloodGroup, makeBloodGroups } from '@/utils/bloodGroup/bloodGroup';
import { Droplet, LoaderIcon, Search } from 'lucide-react';
import { BloodGroups, availabilites } from '@/constants/constant';
import Link from 'next/link';

interface IDonorsPageProps { }

const DonorsPage: React.FunctionComponent<IDonorsPageProps> = (props) => {
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(10);
  const [bloodType, setBloodType] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [availability, setAvailability] = React.useState<string>('');
  const [donorsData, setDonorsData] = React.useState<IDonor[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const query: { page: number, limit: number, bloodType?: string, location?: string, availability?: string, searchTerm?: string } = {
    page,
    limit,
  };
  if (bloodType) query.bloodType = bloodType;
  if (location) query.location = location;
  if (availability) query.availability = availability;
  if (searchTerm) query.searchTerm = searchTerm;

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
            className=""
            placeholder="Search Donor by name"
          />
          <Select
            value={bloodType}
            placeholder='Select Blood Group'
            onChange={(e) => setBloodType(e.target.value)}
            size='lg'
          >
            {BloodGroups.map((blood: { name: string, value: string }) => <SelectItem key={blood.name} value={blood.name}>
              {blood.value}
            </SelectItem>)}
          </Select>
          <Select size='lg' placeholder='Choose availability' onChange={(e) => setAvailability(e.target.value)}>
            {availabilites.map((avil: { name: string, value: string }) => <SelectItem key={avil.name} value={avil.name}>
              {avil.value}
            </SelectItem>)}
          </Select>
        </div>

        {
          donors?.length === 0 && <h3 className='text-center py-5 text-4xl font-bold text-coral-400'>No Donors Found</h3>
        }

        {!isLoading ? (
          <>
            <section className='grid grid-cols-1 py-20 lg:grid-cols-3 gap-5'>
              {donorsData?.map((donor) => (
                <div key={donor.id}>
                  <Card className="shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out ">
                    <CardHeader className="flex items-center gap-3 p-4 bg-gray-100">
                      <Avatar
                        src={'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg'}
                        className='w-16 h-16 rounded-full'
                      />
                      <div className="flex flex-col ">
                        <p className="text-lg font-semibold pl-1">{donor.name}</p>
                        <p className="text-sm text-gray-500 pl-1 pb-1">{donor.email}</p>
                        {/* @ts-ignore */}
                        <Chip size='sm' color={donor.availability == true ? 'success' :'danger'} variant="flat">
                          {/* @ts-ignore */}
                          {donor.availability == true ? "Available" : "Unavailable"}
                        </Chip>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-4">
                      <p className="text-md text-gray-700"><strong>Location :</strong> {donor.location}</p>
                      <p className="text-md text-coral-400 flex py-1 items-center">
                        <Droplet className="text-coral-400 mr-2  " />
                        <p className='text-xl font-semibold mt-1'>{makeBloodGroups(donor.bloodType as IbloodGroup)}</p>
                      </p>
                    </CardBody>
                    <Divider />
                    <CardFooter className="p-4">
                      <Link
                        href={`/donnors/${donor.id}`}
                        className="text-coral-400 hover:underline"
                      >
                        View Full Profile
                      </Link>
                    </CardFooter>
                  </Card>
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
           <div className='flex items-center justify-center py-40'>
           <LoaderIcon className='w-20 h-20 text-coral-400 animate-spin' />
           </div>
        )}

       
      </div>
    </>
  );
};

export default DonorsPage;
