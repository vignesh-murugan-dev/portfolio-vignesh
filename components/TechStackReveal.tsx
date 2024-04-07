import Image from 'next/image';
import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiPython, SiPostgresql, SiAmazonaws, SiDocker, SiMysql, SiNginx } from "react-icons/si";

const TechStackReveal = () => {
    return (
        <div className='rounded-lg bg-gradient-to-r from-slate-800  to-yellow-600 flex flex-col items-center justify-center w-full p-4 space-y-4'>
            <p className='text-xl font-semibold'>My Tech toolkit</p>
            <div className='flex gap-4 flex-wrap'>
                <Image src={'/js.png'} alt="JS" width={50} height={50} />
                <Image src={'/ts.png'} alt="JS" width={50} height={50} />
                <Image src={'/python.png'} alt="JS" width={50} height={50} />
            </div>
            <div className='flex flex-col md:flex-row space-x-20 space-y-4 md:space-y-0 '>
                <div className='flex gap-4 '>
                    <Image src={'/react.png'} alt="JS" width={50} height={50} />
                    <Image src={'/css.png'} alt="JS" width={50} height={50} />
                    <Image src={'/tailwind.png'} alt="JS" width={50} height={50} />
                </div>
                <div className='flex justify-end gap-4 '>
                    <Image src={'/node.png'} alt="JS" width={50} height={50} />
                    <Image src={'/sql.png'} alt="JS" width={50} height={50} />
                    <Image src={'/mongo.png'} alt="JS" width={50} height={50} />
                </div>
            </div>
            <div className='flex gap-4'>
                <Image src={'/aws.png'} alt="JS" width={50} height={50} className='border rounded-2xl bg-white shadow-md' />
                <Image src={'/docker.png'} alt="JS" width={50} height={50} className='border rounded-2xl bg-white shadow-md' />
            </div>
            {/* <div className='flex'>
                <SiJavascript className='w-10 h-10 text-yellow-300' />
                <SiTypescript className='w-10 h-10 text-blue-50' />
                <SiPython className='w-10 h-10 ' />
            </div>
            <div className='flex'>
                <FaReact />
                <SiNextdotjs />
                <SiTailwindcss />
            </div>
            <div className='flex'>
                <FaNodeJs />
                <SiExpress />
            </div>
            <div className='flex'>
                <SiMongodb />
                <SiPostgresql />
                <SiMysql />
            </div>
            <div className='flex'>
                <SiAmazonaws />
                <SiDocker />
                <SiNginx />
            </div> */}
        </div>
    )
}

export default TechStackReveal