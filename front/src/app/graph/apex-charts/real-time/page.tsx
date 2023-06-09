'use client'
import { Props as ApexChartProps } from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useEffect, useState } from 'react'

const RealTimeChart: React.FC = () => {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random value
      const randomValue = Math.floor(Math.random() * 100)

      // Update the data
      setData((prevData) => [...prevData, randomValue])
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const series = [
    {
      name: 'Random Data',
      data: data,
    },
  ]

  const options: ApexChartProps = {
    chart: {
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: Array.from({ length: data.length }, (_, i) => i.toString()),
    },
    yaxis: {
      min: 0,
      max: 100,
    },
  }

  return <ReactApexChart options={options} series={series} type="line" height={350} />
}

export default RealTimeChart
