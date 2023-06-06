'use client'

import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import StreamingPlugin from 'chartjs-plugin-streaming'
Chart.register(StreamingPlugin)

import React from 'react'
import type { NextPage } from 'next'
import { LintHorizontalChart } from '@/components/line-horizontal-chart'

const Index: NextPage<void> = () => {
  return <LintHorizontalChart />
}

export default Index
