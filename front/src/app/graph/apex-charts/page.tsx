import Link from 'next/link'

export default function ApexChartIndex() {
  return (
    <>
      <p>固定値での最小限データの描画サンプル</p>
      <Link href={`/graph/apex-charts/simple-chart`}>
        <p style={{ color: 'blue' }}>SimpleChart</p>
      </Link>
      <p>ダミーデータを使用してリアルタイム描画</p>
      <Link href={`/graph/apex-charts/real-time`}>
        <p style={{ color: 'blue' }}>RealTimeChart</p>
      </Link>
    </>
  )
}
