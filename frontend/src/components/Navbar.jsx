import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex sticky top-0 w-full justify-center items-center bg-blue-700 bg-opacity-30 backdrop-blur-sm h-16'>

            <div className="flex max-w-screen-xl w-full justify-between items-center">
                <Link to={"/"} className="flex text-3xl font-bold hover:text-blue-700 duration-200">Blogify.</Link>

                <div className="flex gap-4">
                    <Link to={"/login"} className="font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">Login</Link>
                    <Link to={"/register"} className="font-semibold hover:bg-blue-700 hover:text-white px-4 rounded-lg p-2 duration-200">Register</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar
