import React from 'react'
import { Line } from 'react-chartjs-2'
import { ja } from 'date-fns/locale'

export const LintHorizontalChart = () => {
  return (
    <div className={'line-chart'}>
      <Line
        data={{
          datasets: [
            {
              label: 'Sample1',
              borderColor: '#abcde8',
              backgroundColor: '#abcde8',
              data: [],
            },
            {
              label: 'Sample2',
              borderColor: '#c7def1',
              backgroundColor: '#c7def1',
              data: [],
            },
            {
              label: 'Sample3',
              borderColor: '#c4b7f7',
              backgroundColor: '#c4b7f7',
              data: [],
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: 'realtime',
              title: {
                display: true,
                text: 'x軸の値',
              },
              adapters: {
                date: {
                  locale: ja,
                },
              },
              time: {
                unit: 'second',
              },
              realtime: {
                duration: 30000,
                delay: 2000,
                refresh: 2000,
                pause: false,
                ttl: undefined,
                onRefresh: (chart) => {
                  const now = Date.now()
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: now,
                      y: Math.floor(Math.random() * 101),
                    })
                  })
                },
              },
            },
            y: {
              title: {
                display: true,
                text: 'y軸の値',
              },
              min: 0,
              max: 100,
            },
          },
          interaction: {
            intersect: false,
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
              },
              zoom: {
                pinch: {
                  enabled: false,
                },
                wheel: {
                  enabled: true,
                },
                mode: 'x',
              },
              limits: {
                x: {
                  minDelay: 0,
                  maxDelay: 4000,
                  minDuration: 1000,
                  maxDuration: 20000
                },
              }
            },
          },
        }}
      />
    </div>
  )
}
