import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:7000/api/auth/register', {
            email: JSON.stringify(email),
            password: JSON.stringify(password)
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        )
    }

    return (
        <div className='flex h-[88vh] items-center w-full'>

            <form
                onSubmit={handleRegister}
                className="flex flex-col w-full p-10 gap-5 rounded-lg bg-violet-200">

                <div className="text-3xl font-bold">Register</div>

                <div className="w-full flex flex-col gap-5">

                    <label>
                        <div className="text-sm font-semibold w-full">
                            Email:
                        </div>
                        <input type="email"
                            required
                            className='focus:outline-none border border-violet-200 focus:border-blue-600 rounded-md px-2 py-1 w-full'
                            placeholder='example@123.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </label>

                    <label>
                        <div className="text-sm font-semibold w-full">
                            Password:
                        </div>
                        <input
                            type="text"
                            required
                            className=' focus:outline-none border border-violet-200 focus:border-blue-600 rounded-md px-2 py-1 w-full'
                            placeholder='password123'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </label>
                </div>

                <div className="flex items-center justify-between">
                    <div className="font-semibold">Already have an account?&nbsp;
                        <Link to='/login' className='text-blue-700 border-b border-blue-700'>
                            Login here.
                        </Link>
                    </div>

                    <button type='submit' className='rounded-md bg-blue-700 text-white py-2 px-6 text-lg font-semibold w-fit'>Register</button>
                </div>

            </form>

        </div>
    )
}

export default Register
