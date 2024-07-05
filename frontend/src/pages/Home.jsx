import React from 'react'
import BlogPost from '../components/BlogPost'

const Home = () => {
    return (
        <div className='flex w-full'>
            <div className="w-full gap-5 flex flex-col">
                This is supposed to fetch all the blog posts.
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
        </div>
    )
}

export default Home
