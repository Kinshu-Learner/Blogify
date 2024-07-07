import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { Link, Navigate, useParams } from 'react-router-dom';
import Loader from './Loader';
import { UserContext } from '../contexts/UserContext';
import 'react-quill/dist/quill.snow.css';

const FullBlog = () => {

    const [blogInfo, setBlogInfo] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const { id } = useParams();

    const { userInfo } = useContext(UserContext);

    useEffect(() => {

        const fetchBlog = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/posts/${id}`);

            setBlogInfo(response.data);
        }
        fetchBlog();

    }, [])

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/posts/${id}`,
                {
                    withCredentials: true
                }
            )

            if (response.status === 200) {
                alert('Blog deleted successfully');
                setRedirect(true);
            }
        } catch (error) {
            alert("Error deleting blog");
        }

    }

    if (redirect) {
        return <Navigate to="/" />
    }

    if (!blogInfo) {
        return <div className='flex justify-center w-full'> <Loader /> </div>
    }

    return (
        <div className='flex w-full'>

            <div className="flex flex-col items-center w-full">

                <div className="md:text-5xl text-4xl font-bold pb-5">{blogInfo.title}</div>

                <div className="flex flex-col items-center justify-center w-full pb-7">
                    <div className=" text-gray-400 font-medium">
                        {format(new Date(blogInfo.createdAt), 'dd MMM, yyyy HH:mm')}
                    </div>
                    <div className="">by @
                        <span className="font-medium">
                            {blogInfo.author.name}
                        </span>
                    </div>

                    {(userInfo.Id === blogInfo.author._id || userInfo._id === blogInfo.author._id) &&

                        <div className="flex mt-2 justify-between relative w-full">
                            <Link to={`/edit/${id}`}
                                className="flex items-center rounded-md hover:cursor-pointer bg-gray-700 text-white w-fit px-6 py-2 gap-3 hover:bg-gray-500 duration-200">
                                Edit Blog
                                <FaRegEdit size={20} />
                            </Link>
                            <button
                                onClick={() => setShowDelete(!showDelete)}
                                className="bg-red-600 duration-200 text-white hover:bg-red-700 rounded-md px-4 flex gap-x-2 items-center"
                            >
                                Delete <FaRegTrashCan />
                            </button>
                            {showDelete && <div className="flex flex-col right-0 top-10 w-64 absolute gap-3 p-4 rounded-lg bg-gray-200 bg-opacity-40 backdrop-blur">
                                <div className="">Are you sure you want to delete this post?</div>
                                <div className="flex justify-between w-full text-white">
                                    <button
                                        onClick={() => setShowDelete(!showDelete)}
                                        className="py-1 px-2 bg-gray-700 rounded-md hover:bg-gray-600 duration-300">No</button>
                                    <button
                                        onClick={handleDelete}
                                        className="py-1 px-2 bg-red-700 rounded-md hover:bg-red-600 duration-300">Yes</button>
                                </div>
                            </div>}
                        </div>

                    }


                </div>

                <div className='pt-6' dangerouslySetInnerHTML={{ __html: blogInfo.content }}></div>
            </div>

        </div>
    )
}

export default FullBlog
