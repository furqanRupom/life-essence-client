"use client";
import React from "react";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [
  
    {
        name: "Blood Requests",
        data: [45, 50, 60, 65, 70, 75, 85],
    },
];

const options: Props["options"] = {
    chart: {
        type: "area",
        animations: {
            easing: "linear",
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: "blood-donation-request-chart",
        foreColor: "hsl(var(--nextui-default-800))",
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    title: {
        style: {
            fontSize: '20px',
            color: 'hsl(var(--nextui-default-800))'
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
            style: {
                colors: "#FF6F61",
            },
        },
        axisBorder: {
            color: "hsl(var(--nextui-default-200))",
        },
        axisTicks: {
            color: "#FF6F61",
        },
    },
    tooltip: {
        enabled: true,
        marker: {
            fillColors: ['#cc7161', '#FF6F61']
        }
    },
    grid: {
        show: false,
        borderColor: "hsl(var(--nextui-default-200))",
        strokeDashArray: 0,
        position: "back",
    },
    stroke: {
        curve: "smooth",
        colors: ['#cc7161', '#FF6F61']
    },
    markers: {
        size: 0,
        colors: ['#cc7161', '#FF6F61']
    },
    colors: ['#cc7161', '#FF6F61'],
    fill: {
        type: 'gradient',
        colors: ['#EBBBB0'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
};

export const BloodChart = () => {
    return (
        <div className="w-full z-20 bg-coral-50 bg-opacity-15 rounded-3xl p-3">
            <div id="chart">
                <Chart options={options} series={state} type="area" height={350} />
            </div>
        </div>
    );
};
