import React, { useEffect, useState } from 'react'
import BlogPost from '../components/BlogPost'
import axios from 'axios'

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchAllPosts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/posts`);

            if (response.status === 200) {
                setPosts(response.data);
            }
        }

        fetchAllPosts();
    }, []);

    return (
        <div className='flex w-full'>

            <div className="w-full gap-5 flex flex-col">

                {posts.length > 0 && posts.map((post) => (
                    <BlogPost key={post._id} {...post} />
                ))}

            </div>

        </div>
    )
}

export default Home
