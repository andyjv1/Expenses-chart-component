import React from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js";
import Data from '../data.json'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
ChartJS.defaults.font.family = "DM Sans";

const dateToday = new Date().getDay() - 1;

const Square = () => {

    const state = {
        labels: Data.map(obj => obj.day),
        datasets: [
            {
                label: "",
                backgroundColor: (dataColor) => {
                    const fillColor = dataColor.index === dateToday ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
                    return fillColor;
                },
                fill: false,
                hoverBackgroundColor: (dataColor) => {
                    const hoverColor = dataColor.index === dateToday ? "hsl(187, 34%, 85%)" : "hsl(10, 78%, 80%)";
                    return hoverColor;
                },
                borderRadius: 4,
                borderSkipped: false,
                data: Data.map(obj => obj.amount),
            },
        ],
    };

    return (
        <div className='square'>
            <div>
                <h2 className="">Spending - Last 7 days </h2>
                <div className='chart'>
                <Bar
                    data={state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                beginAtZero: true,
                                border: {
                                    display: false,
                                },
                                ticks: {
                                    font: {
                                        size: 15,
                                    },
                                    color: "hsl(28, 10%, 53%)",
                                },
                                grid: {
                                    drawBorder: false,
                                    display: false,
                                },
                            },
                            y: {
                                border: {
                                    display: false,
                                },
                                grid: {
                                    drawBorder: false,
                                    display: false,
                                },
                                beginAtZero: true,
                                ticks: {
                                    display: false,
                                },
                            },
                        },
                        plugins: {
                            tooltip: {
                                displayColors: false,
                                yAlign: "bottom",
                                caretPadding: 5,
                                caretSize: 0,
                                callbacks: {
                                    title: () => {
                                        return "";
                                    },

                                    label: (context) => {
                                        return "$" + context.raw;
                                    },
                                },
                            },
                        },

                    }}
                    />
                </div>
            </div>
            <hr></hr>
            <div className="squareText">
                <h1>
                    <p>
                        Total this month
                    </p>
                    $478.33
                </h1>

                <h3>
                    +2.4%
                    <p>from last month</p>
                </h3>
            </div>
        </div>
    )
}

export default Square