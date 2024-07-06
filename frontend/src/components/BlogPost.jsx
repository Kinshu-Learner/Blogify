import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

const BlogPost = ({ _id, title, summary, createdAt, author }) => {
    return (
        <Link to={`/blog/${_id}`} className='w-full flex'>
            <div className="flex p-4 flex-col items-center justify-center rounded-lg w-full hover:bg-gray-100 duration-200 bg-blue-700 bg-opacity-15">

                <div className="text-xl font-semibold">{title}</div>

                <div className="flex justify-between w-full text-center text-sm py-3">
                    <div className="font-medium">Author:&nbsp;
                        <span className='font-normal'>
                            {author.name}
                        </span>
                    </div>

                    <div className="font-medium">Created At:&nbsp;
                        <span className='font-normal'>
                            {format(new Date(createdAt), 'dd MMM, yyyy HH:mm')}
                        </span>
                    </div>
                </div>

                <p className="">{summary}</p>
            </div>
        </Link>
    )
}

export default BlogPost
