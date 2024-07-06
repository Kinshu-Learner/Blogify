import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import { UserContext } from '../contexts/UserContext';
import 'react-quill/dist/quill.snow.css';

const FullBlog = () => {

    const [blogInfo, setBlogInfo] = useState(null);
    const { id } = useParams();

    const { userInfo } = useContext(UserContext);

    useEffect(() => {

        const fetchBlog = async () => {
            const response = await axios.get(`http://localhost:7000/api/posts/${id}`);

            setBlogInfo(response.data);
        }
        fetchBlog();

    }, [])

    if (!blogInfo) {
        return <div className='flex justify-center w-full'> <Loader /> </div>
    }

    return (
        <div className='flex w-full'>

            <div className="flex flex-col items-center w-full">

                <div className="text-5xl font-bold pb-5">{blogInfo.title}</div>

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
                        <Link to={`/edit/${id}`}
                            className="flex mt-2 items-center rounded-md hover:cursor-pointer bg-gray-700 text-white w-fit px-6 py-2 gap-3 hover:bg-gray-500 duration-200">
                            Edit Blog
                            <FaRegEdit size={20} />
                        </Link>}

                </div>

                <div dangerouslySetInnerHTML={{ __html: blogInfo.content }}></div>
            </div>

        </div>
    )
}

export default FullBlog
