import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
    return (
        <div>
            <Image src={'/vignesh.png'} alt='vignesh' width={500} height={800} className='rounded-2xl h-full' />
        </div>
    )
}

export default ImageCard