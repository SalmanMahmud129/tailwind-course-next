import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen text-white bg-slate-900'>
      <div className='container px-2 '>
        <div className='relative w-32 h-32 p-8 bg-red-500 rounded-lg'>
          <div className='absolute w-24 h-24 bg-green-500 rounded-lg inset-2'></div>
        </div>
      </div>
    
    </div>
  )
}
