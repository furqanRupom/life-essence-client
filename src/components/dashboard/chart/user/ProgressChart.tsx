"use client"
import React from "react";
import ReactApexChart from "react-apexcharts";

interface IUserMetrics {
    donations: number[];
    donationRequests: number[];
    monthlyDonations: number[];
    monthlyRequests: number[];
}

interface IBloodDonationMetricsProps {
    userMetrics: IUserMetrics;
}


const BloodDonationMetrics: React.FC<IBloodDonationMetricsProps> = ({ userMetrics }) => {
    const chartOptions = {
        chart: {
            type: 'line',
            height: 80,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100],
            },
        },
        markers: {
            size: 0,
        },
        tooltip: {
            enabled: false,
        },
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 10,
            },
        },
    };

    const donationsData = {
        series: [
            {
                name: 'Donations',
                data: userMetrics.donations,
            },
        ],
        options: {
            ...chartOptions,
            colors: ['#f47f6a'],
        },
    };

    const donationRequestsData = {
        series: [
            {
                name: 'Donation Requests',
                data: userMetrics.donationRequests,
            },
        ],
        options: {
            ...chartOptions,
            colors: ['#f47f6a'],
        },
    };

    const monthlyDonationsData = {
        series: [
            {
                name: 'Monthly Donations',
                data: userMetrics.monthlyDonations,
            },
        ],
        options: {
            ...chartOptions,
            colors: ['#f47f6a'],
        },
    };

    const monthlyRequestsData = {
        series: [
            {
                name: 'Monthly Requests',
                data: userMetrics.monthlyRequests,
            },
        ],
        options: {
            ...chartOptions,
            colors: ['#f47f6a'],
        },
    };

    return (
        <div className="">
            <div className="container max-w-6xl px-5 mx-auto py-4 ">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative p-5  overflow-hidden bg-white rounded-md shadow-sm">
                        <div className="text-base text-gray-400 ">Total Donations</div>
                        <div className="relative z-10 flex items-center pt-1">
                            <div className="text-2xl font-bold text-gray-900 ">
                                {userMetrics.donations.reduce((a, b) => a + b, 0)} Times
                            </div>
                            <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 15L12 9L6 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>1.8%</span>
                            </span>
                        </div>
                        <div className=" bottom-0 inset-x-0 z-0">
                            <ReactApexChart
                            // @ts-ignore
                                options={donationsData.options}
                                series={donationsData.series}
                                type="area"
                                height={80}
                            />
                        </div>
                    </div>
                    <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
                        <div className="text-base text-gray-400 ">Donation Requests</div>
                        <div className="relative z-10 flex items-center pt-1">
                            <div className="text-2xl font-bold text-gray-900 ">
                                {userMetrics.donationRequests.reduce((a, b) => a + b, 0)} Requests
                            </div>
                            <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>2.5%</span>
                            </span>
                        </div>
                        <div className=" bottom-0 inset-x-0 z-0">
                            <ReactApexChart
                                // @ts-ignore
                                options={donationRequestsData.options}
                                series={donationRequestsData.series}
                                type="area"
                                height={80}
                            />
                        </div>
                    </div>
                   
                    <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
                        <div className="text-base text-gray-400 ">Monthly Requests</div>
                        <div className="relative z-10 flex items-center pt-1">
                            <div className="text-2xl font-bold text-gray-900 ">
                                {userMetrics.monthlyRequests.reduce((a, b) => a + b, 0)} Requests
                            </div>
                            <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 15L12 9L6 15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>2.2%</span>
                            </span>
                        </div>
                        <div className=" bottom-0 inset-x-0 z-0">
                            <ReactApexChart
                            // @ts-ignore
                                options={monthlyRequestsData.options}
                                series={monthlyRequestsData.series}
                                type="area"
                                height={80}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodDonationMetrics;
