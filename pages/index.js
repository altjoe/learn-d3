import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ChartWrapper from '../components/ChartWrapper'

export default function Home() {
  return (
    <Layout>
      <h1>plot</h1>
      <ChartWrapper/>
    </Layout>    
  )
}
