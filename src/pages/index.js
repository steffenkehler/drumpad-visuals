import Head from 'next/head'
import DrumGrid from '../components/organisms/DrumGrid/DrumGrid'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center space-y-6'>
        <DrumGrid />
      </main>
    </div>
  )
}
