import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-center'>Built with ❤️ by <Link href={'https://github.com/webdev-vignesh'} className='underline'>Vignesh Murugan</Link></div>
    )
}

export default Footer