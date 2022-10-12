import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import React from 'react'

export default function WaterChart({ chartData }) {
    return (
        <Bar data={chartData} />
    )
}