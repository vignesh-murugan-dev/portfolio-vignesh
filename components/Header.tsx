"use client"

import { IconProviderProps } from "@/types";
import Link from "next/link";
import { IconContext, IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
    
    return (
        <header className="border-b border-gray-500 fixed top-0 w-full bg-black flex justify-between items-center p-6">
            <div>
                <Link target="_self" href={'/'} id="name" className="text-custom-yellow font-semibold text-lg">
                    <span>{`<Vignesh`}</span>
                    <span>{` Murugan />`}</span>
                </Link>
            </div>
            <div className="hidden md:block space-x-4 font-semibold">
                <Link href={'/'} className="hover:underline">Home</Link>
                <Link href={'#about'} className="hover:underline">About</Link>
                <Link href={'#skills'} className="hover:underline">Skills</Link>
                {/* <Link href={'#experiences'} className="hover:underline">Experiences</Link>
                <Link href={'#projects'} className="hover:underline">Projects</Link> */}
                <Link href={'#blogs'} className="hover:underline">Blogs</Link>
            </div>
            <div id="socials" className="flex items-center space-x-4">
                <Link href={'https://github.com/vignesh-murugan-dev'} target="_blank"><IconProvider Icon={FaGithub} iconColor={'white'} /></Link>
                <Link href={'https://www.linkedin.com/in/vignesh-murugan-dev/'} target="_blank"><IconProvider Icon={FaLinkedinIn} iconColor={'white'} /></Link>
                <Link href={'mailto:vigmurug@gmail.com'} target="_blank"><IconProvider Icon={HiOutlineMail} iconColor={'white'} /></Link>
            </div>
        </header>
    )
}

export function IconProvider({Icon, iconColor}: IconProviderProps) {
    return (
        <IconContext.Provider value={{ color: iconColor, size: '2em' }}>
        <div>
            <Icon />
        </div>
        </IconContext.Provider>
    )
}