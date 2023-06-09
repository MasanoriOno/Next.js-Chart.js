'use client'
import Chart from 'react-apexcharts'

export default function ApexChartGraph() {
  const series = [
    {
      name: 'Temperature in Fahrenheit', //will be displayed on the y-axis
      data: [43, 53, 50, 57],
    },
  ]
  const options = {
    chart: {
      id: 'simple-bar',
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      x: {
        format: 'yyyy/MM/dd HH:mm:ss.f',
      },
    },
    xaxis: {
      categories: [1, 2, 3, 4], //will be displayed on the x-asis
    },
  }
  return <Chart type="line" options={options} series={series} />
}
