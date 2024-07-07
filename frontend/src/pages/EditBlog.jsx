import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const CreatePost = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {

        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:7000/api/posts/${id}`);

            setTitle(response.data.title);
            setSummary(response.data.summary);
            setContent(response.data.content);
        }

        fetchPost();
    }, [])


    const handleUpdatePost = async (e) => {
        e.preventDefault();

        const textContent = content.replace(/<[^>]*>?/gm, '').trim();
        if (!title.trim() || !summary.trim() || !textContent) {
            alert('Please fill in all the fields correctly.');
            return;
        }

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);

        try {
            const response = await axios.put(`http://localhost:7000/api/posts/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            if (response.status === 200) {
                alert('Post updated successfully');
                setRedirect(true);
            }
        } catch (error) {
            alert("Error updating post");
        }
    }

    if (redirect) {
        return (<Navigate to={`/blog/${id}`} />)
    }

    if (!title || !summary || !content) {
        return <div className='flex justify-center w-full'> <Loader /> </div>
    }

    return (
        <div className='w-full'>

            <div className="text-3xl font-bold pb-10">Update Post</div>

            <form
                onSubmit={handleUpdatePost}
                className="w-full flex flex-col gap-2">

                <input
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    required
                    type="text"
                    placeholder='Title'
                    className='focus:outline-none border focus:border-blue-700 border-opacity-20 py-1 px-2 rounded-md' />

                <input
                    onChange={(e) => { setSummary(e.target.value) }}
                    maxLength={400}
                    value={summary}
                    required
                    type="text"
                    placeholder='Summary'
                    className='focus:outline-none border focus:border-blue-700 border-opacity-20 py-1 px-2 rounded-md' />

                <ReactQuill
                    value={content}
                    required
                    placeholder='Content'
                    onChange={(newValue) => { setContent(newValue) }}
                />

                <button
                    type='submit'
                    className='w-full px-6 py-2 text-lg text-white bg-blue-900 rounded-lg font-semibold hover:bg-blue-700 duration-200'>Update Post</button>

            </form>

        </div>
    )
}

export default CreatePost
