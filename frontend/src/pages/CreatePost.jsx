import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleCreatePost = async (e) => {

        const textContent = content.replace(/<[^>]*>?/gm, '').trim();
        if (!title.trim() || !summary.trim() || !textContent) {
            alert('Please fill in all the fields correctly.');
            return;
        }

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);

        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/posts`,
                data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
            )
            if (response.status === 200) {
                alert('Post created successfully');
                setRedirect(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Unauthorized, please log in.");
            }
        }
    }

    if (redirect) {
        return (<Navigate to='/' />)
    }

    return (
        <div className='w-full'>

            <div className="text-3xl font-bold pb-10">Create Post</div>

            <form
                onSubmit={handleCreatePost}
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
                    value={content || ''}
                    required
                    minlength={1}
                    placeholder='Content'
                    onChange={(newValue) => { setContent(newValue) }}
                />

                <button
                    type='submit'
                    className='w-full px-6 py-2 text-lg text-white bg-blue-900 rounded-lg font-semibold hover:bg-blue-700 duration-200'>Create Post</button>

            </form>

        </div>
    )
}

export default CreatePost
