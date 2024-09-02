import React, { useState } from 'react'

const Form = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valiateForm()) {
            console.log('form submitted succesfully', form)
        }
    }

    const valiateForm = () => {
        let error = {};

        if (!form.username.trim()) {
            error.username = "Name is required";
        }

        if (!form.email.trim()) {
            error.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            error.email = "Invalid E-mail"
        }

        if (!form.password.trim()) {
            error.password = "Password is required"
        } else if (form.password.length < 5) {
            error.password = "Password must be at least 6 characters"
        }

        setError(error);

        return (Object.keys(error).length === 0)
    }

    return (
        <div className='m-auto border border-blue-600 rounded-md p-2 w-[50%] h-auto mt-8'>
            <h1 className='text-center text-blue-600 font-normal text-4xl mb-5'>Form</h1>

            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-5'>
                    <input name='username' type="text" className='p-2 border rounded-md' placeholder='username...' value={form.username} onChange={handleChange} />
                    <p className='text-sm text-red-600'>{error.username}</p>
                </div>
                <div className='flex flex-col mb-5'>
                    <input name='email' type="email" className='p-2 border rounded-md' placeholder='email...' value={form.email} onChange={handleChange} />
                    <p className='text-sm text-red-600'>{error.email}</p>
                </div>
                <div className='flex flex-col mb-5'>
                    <input name='password' type="password" className='p-2 border rounded-md' placeholder='password...' value={form.password} onChange={handleChange} />
                    <p className='text-sm text-red-600'>{error.password}</p>
                </div>
                <input className='bg-blue-600 rounded-md cursor-pointer p-2 text-white' type="submit" />
            </form>

        </div>
    )
}

export default Form