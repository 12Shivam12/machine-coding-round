import React, { useEffect, useState } from 'react'

const Crousal = () => {
    const images = [
        {
            src: 'https://picsum.photos/id/600/600/400',
            alt: "Forest"
        },
        {
            src: 'https://picsum.photos/id/100/600/400',
            alt: 'Beach',
        },
        {
            src: 'https://picsum.photos/id/200/600/400',
            alt: 'Yak',
        },
        {
            src: 'https://picsum.photos/id/300/600/400',
            alt: 'Hay',
        },
        {
            src: 'https://picsum.photos/id/400/600/400',
            alt: 'Plants',
        },
        {
            src: 'https://picsum.photos/id/500/600/400',
            alt: 'Building',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval); 
    }, [images.length]);

    

    const handleIndex = (index) => {
        setCurrentIndex(index % images.length)
    }


    return (
        <div className='w-3/5  flex flex-col m-auto '>
            <div className='flex justify-center items-center relative'>
                <button onClick={() => (currentIndex === 0 ? handleIndex(currentIndex + images.length - 1) : handleIndex(currentIndex - 1))} className='w-10 h-10 border-2 border-black text-xl font-semibold flex items-center justify-center hover:text-white  absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>{'<'}</button>
                <img className='object-cover rounded-md' src={images[currentIndex].src} alt="crousal" />
                <button onClick={() => handleIndex(currentIndex + 1)} className='w-10 h-10 border-2 border-black  text-xl font-semibold flex items-center justify-center hover:text-white absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>{'>'}</button>
            </div>
            <div className='flex m-auto mt-5'>
                {images.map((ele, ind) => (
                    <li key={ind} className={`${ind === currentIndex ? 'text-gray-400' : 'text-black'} `} onClick={() => handleIndex(ind)}></li>
                ))}
            </div>
        </div>
    )
}

export default Crousal


















