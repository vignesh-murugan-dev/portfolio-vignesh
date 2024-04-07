import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AboutCard from '@/components/AboutCard'
import { BackgroundBoxes } from '@/components/BGBox'
import ImageCard from '@/components/ImageCard'
import TechStackReveal from '@/components/TechStackReveal'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='space-y-10 px-6 my-10'>
      <Navbar />
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <BackgroundBoxes />
        <ImageCard />
      </div>
      <TechStackReveal />
      <Footer />
    </div>
  )
}
