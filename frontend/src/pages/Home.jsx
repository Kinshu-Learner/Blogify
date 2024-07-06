import React, { useEffect } from 'react'
import BlogPost from '../components/BlogPost'
import axios from 'axios'

const Home = () => {

    useEffect(() => {

        const fetchAllPosts = async () => {
            const response = await axios.get('http://localhost:7000/api/posts');
        }

        fetchAllPosts();
    }, [])


    return (
        <div className='flex w-full'>
            <div className="w-full gap-5 flex flex-col">
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
        </div>
    )
}

export default Home
