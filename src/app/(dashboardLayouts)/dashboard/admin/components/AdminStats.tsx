"use client";
import { useMetaDataQuery } from '@/redux/api/userApi';
import * as React from 'react';

interface IAdminStatsProps {
}

const AdminStats: React.FunctionComponent<IAdminStatsProps> = (props) => {
    const {data:metaData,isLoading} = useMetaDataQuery({});
    if(isLoading){
        return <></>
    }
  return <>
      <div className="bg-gray-200 ">
          <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-12">
              <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                  <div className="space-y-2">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                          <span>All Accounts</span>
                      </div>
                      <div className="text-3xl dark:text-gray-100">{metaData.totalAccounts}</div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                          <span>32% increase</span>
                          <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="#f9004d"
                              aria-hidden="true"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                  <div className="space-y-2">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                          <span>Active Accounts</span>
                      </div>
                      <div className="text-3xl dark:text-gray-100">{metaData?.totalActiveAccounts}</div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                          <span>3% decrease</span>
                          <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="#f47f6a"
                              aria-hidden="true"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                  <div className="space-y-2">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                          <span>Total blood Requests</span>
                      </div>
                      <div className="text-3xl dark:text-gray-100">{metaData?.totalRequests}</div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                          <span>7% increase</span>
                          <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </>;
};

export default AdminStats;
