import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [hrs, setHrs] = useState('');
    const [mins, setMin] = useState('');
    const [secs, setSecs] = useState('');
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [intervalId])

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'hrs') setHrs(value);

        if (name === 'mins') setMin(value);

        if (name === 'secs') setSecs(value);
    }

    const handleStart = () => {
        const totalSeconds = (Number(hrs * 3600) + Number(mins * 60) + Number(secs));
        setTotalSeconds(totalSeconds);
        if (totalSeconds > 0) {
            let intervalId = setInterval(() => {
                setTotalSeconds((seconds) => seconds > 0 ? seconds - 1 : 0);
            }, 1000);
        }
        setIntervalId(intervalId);
    }

    const handleStop = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    const formatTime = () => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = Math.floor((totalSeconds % 3600) % 60);

        return (`${hrs < 10 ? '0' + hrs : hrs}: ${mins < 10 ? '0' + mins : mins}: ${secs < 10 ? '0' + secs : secs}`);
    }

    return (
        <div className='w-1/2 border-2 border-black h-[250px] mt-10 m-auto flex flex-col items-center justify-center rounded-md'>
            <div className='flex gap-2 justify-center mt-5'>
                <input className='w-1/5 p-2 text-center border-2 border-black rounded-md' type="number" placeholder='Hrs' value={hrs} name='hrs' onChange={handleChange} />
                <input className='w-1/5 p-2 text-center border-2 border-black rounded-md' type="number" placeholder='Mins' value={mins} name='mins' onChange={handleChange} />
                <input className='w-1/5 p-2 text-center border-2 border-black rounded-md' type="number" placeholder='Secs' value={secs} name='secs' onChange={handleChange} />
            </div>

            <h1 className='mt-5  mb-5 text-2xl font-bold'>{formatTime(totalSeconds)}</h1>

            <div className='flex flex-col md:flex md:flex-row gap-2'>
                <button className='px-4 rounded-md text-2xl hover:text-white border-2 border-black  text-black  hover:bg-black' onClick={handleStart}>Start</button>
                <button className='px-4 rounded-md text-2xl hover:text-white border-2 border-black  text-black  hover:bg-black' onClick={handleStop}>Stop</button>
            </div>

        </div>
    )
}

export default Stopwatch


