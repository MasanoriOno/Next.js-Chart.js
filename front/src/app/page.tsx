'use client'

import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage<void> = () => {
  return (
    <>
      <p>グラフ表示テスト</p>
      <p>↓各リンク</p>
      {/* グラフ描写はできるが、グラフホバー時に謎のエラーが出てしまう。 */}
      <div>
        <Link href={`/graph/chart-js`}>Chart.js-Graph</Link>
      </div>
      <div>
        <Link href={`/graph/apex-charts`}>ApexChart-Graph</Link>
      </div>
    </>
  )
}

export default Index
