import React from 'react'

const Form = () => {
    return (
        <div className='m-auto border border-blue-600 rounded-md p-2 w-[50%] h-auto mt-8'>
            <h1 className='text-center text-blue-600 font-normal text-4xl mb-5'>Form</h1>
            <div className='flex flex-col gap-8'>
                <input type="text" className='p-2 border rounded-md' placeholder='username...' />
                <input type="text" className='p-2 border rounded-md' placeholder='email...' />
                <input type="text" className='p-2 border rounded-md' placeholder='password...' />
                <input className='bg-blue-600 rounded-md cursor-pointer p-2 text-white' type="submit" />
            </div>
        </div>
    )
}

export default Form