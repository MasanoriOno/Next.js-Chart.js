'use client'
import dynamic from 'next/dynamic'
import { Props as ApexChartProps } from 'react-apexcharts'

// @typesが存在しないので、以下の形でChartのプロパティに型付与。
// https://github.com/apexcharts/react-apexcharts/issues/368
const Chart = dynamic<ApexChartProps>(() => import('react-apexcharts'), {
  ssr: false,
})

export default function ApexChartGraph() {
  const series = [
    {
      name: 'Temperature in Fahrenheit', //will be displayed on the y-axis
      data: [43, 53, 50, 57],
    },
  ]
  const options: ApexChartProps = {
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
      categories: [1, 2, 3, 4],
    },
  }
  return (
    <>
      <Chart type="line" options={options} series={series} />
    </>
  )
}
