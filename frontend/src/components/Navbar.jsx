import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbDeviceIpadPlus } from 'react-icons/tb';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/auth/profile`, {
                    withCredentials: true
                });

                if (response.status === 200) {
                    setUserInfo(response.data);
                }
            } catch (error) {
                setUserInfo({});
            }

        }

        fetchProfile();

    }, [])

    const logout = async () => {
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/logout`, {},
            {
                withCredentials: true
            }
        );
        setUserInfo({});
    }

    const userName = userInfo?.name;

    return (
        <div className='flex sticky top-0 w-full justify-center items-center bg-blue-700 bg-opacity-30 backdrop-blur h-16'>

            <div className="flex max-w-screen-xl w-full justify-between items-center">
                <Link to={"/"} className="flex text-3xl font-bold hover:text-blue-700 duration-200 pl-2">Blogify.</Link>

                {userName && <div className="flex gap-3">
                    <Link to={"/create"} className="flex gap-2 items-center font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">
                        <span className="max-lg:hidden">
                            Create New Post
                        </span>
                        <TbDeviceIpadPlus size={20} />
                    </Link>
                    <button onClick={logout} className="font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">Logout</button>
                </div>}

                {!userName && <div className="flex gap-3">
                    <Link to={"/login"} className="font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">Login</Link>
                    <Link to={"/register"} className="font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">Register</Link>
                </div>}

            </div>

        </div>
    )
}

export default Navbar
