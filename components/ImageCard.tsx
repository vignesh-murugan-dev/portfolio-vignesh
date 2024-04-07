import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
    return (
        <div className='rounded-lg'>
            <Image src={'/vignesh.png'} alt='vignesh' width={500} height={800} className='rounded-lg h-full' />
        </div>
    )
}

export default ImageCard