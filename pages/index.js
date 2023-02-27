import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-green-600 text-xs sm:text-base md:text-lg lg:text-3xl mb-1" >
        Hello world!
      </h1>
      <h1 className="text-vuejs">
        Hello world!
      </h1>
    </div>
  )
}
