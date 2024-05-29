"use client";
import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BloodBarChart = () => {
    const series = [
        {
            data: [
                {
                    x: 'January',
                    y: [2, 5], // 2 donations, 5 requests
                },
                {
                    x: 'February',
                    y: [3, 4],
                },
                {
                    x: 'March',
                    y: [4, 7],
                },
                {
                    x: 'April',
                    y: [3, 6],
                },
                {
                    x: 'May',
                    y: [4, 8],
                },
                {
                    x: 'June',
                    y: [2, 6],
                },
                {
                    x: 'July',
                    y: [3, 4],
                },
                {
                    x: 'Auguest',
                    y: [1, 1],
                },
                {
                    x: 'Septmenber',
                    y: [5, 6],
                },
                {
                    x: 'Octobar',
                    y: [12, 7],
                },
                {
                    x: 'November',
                    y: [3, 5],
                },
                {
                    x: 'December',
                    y: [6, 5],
                },
            ],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: 'rangeBar' as const, // Explicitly set type
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                isDumbbell: true,
                horizontal: false,
                columnWidth: 3,
                dumbbellColors: [['#f47f6a', '#ff5f56']]
            },
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
           
            customLegendItems: ['Requests approved', 'Requests Rejected'],
             markers: {
                fillColors: ['#f47f6a', '#ff5f56']
            }
        },
        fill: {
            colors: ['#f6b89e']
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            tickPlacement: 'on',
        },
    };

    return (
        <div>
            <div className='w-full z-20 bg-coral-50 bg-opacity-15 rounded-3xl p-3' id="chart">
                {/* @ts-ignore */}
                <Chart options={options} series={series} type="rangeBar" height={350} />
            </div>
        </div>
    );
};

export default BloodBarChart;
