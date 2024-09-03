import React, { useState } from 'react'

const Count = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>{
       setCounter((counter) => counter+1);
    }

    const handleDecrement = () =>{
        setCounter((counter) => counter-1);
    }
    return (
        <div className='border-2 h-auto w-1/2 border-blue-700 m-auto mt-10 rounded-md '>
            <h1 className='font-bold text-center text-4xl'>{(counter <= 9) ? `0${counter}` : `${counter}`}</h1>
            <div className='flex justify-center mt-5 mb-5 gap-3 '>
                <button onClick={handleIncrement} className='border-2 border-blue-700 px-4 rounded-md hover:bg-blue-700 hover:text-white text-2xl'>Increment</button>
                <button disabled={counter <=0} onClick={handleDecrement} className='border-2 border-blue-700 px-4 rounded-md hover:bg-blue-700 hover:text-white text-2xl'>Decrement</button>
            </div>
        </div>
    )
}

export default Count
