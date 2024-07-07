import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, {
                name: name,
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });

            if (response.status !== 200) {
                alert("Registration failed");
            }
            else {
                alert("Registration successful");
                const userInformation = await response.data;
                setUserInfo(userInformation);
                setRedirect(true);
            }

        } catch (error) {
            console.log(error);
            alert("Registration failed due to an error");
        }

    }

    if (redirect) {
        return <Navigate to={'/'} />
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
                            Name:
                        </div>
                        <input type="text"
                            required
                            className='focus:outline-none border border-violet-200 focus:border-blue-600 rounded-md px-2 py-1 w-full'
                            placeholder='John Doe'
                            value={name}
                            minLength={3}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </label>

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
                            type="password"
                            required
                            className=' focus:outline-none border border-violet-200 focus:border-blue-600 rounded-md px-2 py-1 w-full'
                            placeholder='password123'
                            value={password}
                            minLength={4}
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
