import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7000/api/auth/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });

            if (response.status !== 200) {
                alert("Login failed");
            }
            else {
                const userInformation = await response.data;
                setUserInfo(userInformation);
                setRedirect(true);
            }

        } catch (error) {
            console.log(error);
            alert("Login failed due to an error");
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='flex h-[88vh] items-center w-full'>

            <form
                onSubmit={handleLogin}
                className="flex flex-col w-full p-10 gap-5 rounded-lg bg-violet-200">

                <div className="text-3xl font-bold">Login</div>

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
                    <div className="font-semibold">Not registered?&nbsp;
                        <Link to='/register' className='text-blue-700 border-b border-blue-700'>
                            Create an account here.
                        </Link>
                    </div>

                    <button type='submit' className='rounded-md bg-blue-700 text-white py-2 px-6 text-lg font-semibold w-fit'>Login</button>
                </div>

            </form>

        </div>
    )
}

export default Login
