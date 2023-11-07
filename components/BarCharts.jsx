import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarCharts = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tus', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales Rs',
                    data: [7334467, 6668443, 3384726, 8236626, 4447342, 3557862, 9084683],
                    borderColor: 'rgb(21,8,48)',
                    backgroundColor: 'rgb(21,8,48)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        }
        )
    }, [])

    return (
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
}

export default BarCharts
