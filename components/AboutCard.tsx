import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const AboutCard = () => {
    return (
        <div className='rounded-xl p-4 md:p-10 space-y-8'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 relative z-20'>
                    <img src={'/vignesh.png'} alt='vignesh' className='rounded-full hover:cursor-pointer w-10 h-10' />
                    <div>
                        <p className='font-bold text-sm md:text-lg'>Hi, I&apos;m Vignesh Murugan</p>
                        <p className='font-light text-gray-100 text-sm'>Full Stack Developer</p>
                    </div>
                </div>
                <div className='flex gap-1 md:gap-4 relative z-20'>
                    <Link href={'https://www.linkedin.com/in/webdev-vignesh/'} className='bg-white bg-opacity-25 p-2 rounded-lg shadow-lg backdrop-blur-lg'>
                        <FaLinkedin />
                    </Link>
                    <Link href={'https://github.com/webdev-vignesh/'} className='bg-white bg-opacity-25 p-2 rounded-lg shadow-lg backdrop-blur-lg'>
                        <FaGithub />
                    </Link>
                    <Link href={'mailto:vigmurug@email.com'} className='bg-white bg-opacity-25 p-2 rounded-lg shadow-lg backdrop-blur-lg'>
                        <IoMailOutline />
                    </Link>
                </div>
            </div>
            <div className='relative z-20 space-y-8'>
                <p className='text-2xl lg:text-5xl'>Passionate to build technology!</p>
                <p className='text-lg lg:text-2xl'>Detail-oriented Software Engineer skilled in developing dynamic web applications that solves real world problems.</p>
            </div>
        </div>
    )
}

export default AboutCard