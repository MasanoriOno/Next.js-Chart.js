'use client'

import { Chart, ArcElement, Legend, LineController, Tooltip } from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import ZoomPlugin from 'chartjs-plugin-zoom'
import StreamingPlugin from 'chartjs-plugin-streaming'
Chart.register(StreamingPlugin, ZoomPlugin, ArcElement, Legend, LineController, Tooltip)

import { LintHorizontalChart } from '@/components/line-horizontal-chart'

export default function ChartJsGraph() {
  return (
    <>
      {/* グラフ描写はできるが、グラフホバー時に謎のエラーが出てしまう。 */}
      <LintHorizontalChart />
    </>
  )
}
