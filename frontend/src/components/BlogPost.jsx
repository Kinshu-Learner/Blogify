import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = () => {
    return (
        <Link to={"/blog/:id"} className='w-full flex'>
            <div className="flex p-4 flex-col items-center justify-center rounded-lg w-full hover:bg-gray-100 duration-200 bg-blue-700 bg-opacity-15">

                <div className="text-xl font-semibold">Single Blog Random Title of the Blog</div>

                <div className="flex flex-col text-center text-sm py-3">
                    <div className="font-medium">Author: {/* TODO*/}</div>

                    <div className="font-medium">Created At: {/* TODO*/}</div>
                </div>

                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet quia officia voluptates laboriosam iste delectus hic? Facilis, sint. Dolorum ducimus, id aspernatur voluptatibus commodi enim necessitatibus laudantium omnis architecto molestiae aperiam possimus beatae quis deleniti, illum molestias quasi facere vel soluta voluptatum! Ab velit saepe quam earum accusamus dignissimos asperiores doloremque voluptatum excepturne consequuntur dolores! Culpa ullam fuga repudiandae vero reprehenderit.</p>
            </div>
        </Link>
    )
}

export default BlogPost
