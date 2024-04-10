import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { BackgroundBoxes } from '@/components/BGBox'
import ImageCard from '@/components/ImageCard'
import TechStackCard from '@/components/TechStackCard'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='space-y-10 px-6 my-10'>
      <Navbar />
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <BackgroundBoxes />
        <ImageCard />
      </div>
      <TechStackCard />
      <ProjectCard />
      <Footer />
    </div>
  )
}
