import React, { useEffect, useState } from 'react'

const seconds = () => {
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() =>{
        return () =>{
            clearInterval(intervalId);
        }
    },[intervalId]);

    const handleStart = () => {
        let intervalId;

        intervalId = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        setIntervalId(intervalId);
    }

    const handleStop = () => {
        clearInterval(intervalId)
        setIntervalId(null);
    }

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds/3600);
        const min = Math.floor(seconds / 60)%60;
        const secs = seconds % 60

        return (`${(hrs < 10) ? '0'+hrs : hrs}hrs:${(min < 10) ? '0' + min : min}min:${(secs < 10) ? '0' + secs : secs}sec`)
    }


    return (
        <div className='border-2 h-auto w-1/2 border-blue-700 m-auto mt-10 rounded-md py-5'>
            <h1 className='font-bold text-center text-4xl text-blue-700'>{formatTime(seconds)}</h1>
            <div className='flex justify-center mt-8 mb-5 gap-3 '>
                <button onClick={handleStart} className={` px-4 rounded-md text-2xl hover:text-white border-2 ${intervalId !== null ? 'cursor-not-allowed text-gray-400 border-gray-400 hover:bg-gray-400' : ' border-blue-700  text-blue-700  hover:bg-blue-700'}`}>Start</button>
                <button
                    onClick={handleStop}
                    className={` px-4 rounded-md text-2xl hover:text-white border-2 ${intervalId === null ? 'cursor-not-allowed text-gray-400 border-gray-400 hover:bg-gray-400 ' : ' border-blue-700  text-blue-700  hover:bg-blue-700'}`}>
                    Stop
                </button>
            </div>
        </div>
    )
}

export default seconds
