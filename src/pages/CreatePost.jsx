
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Title from '../components/Title';


const CreatePost = () => {
    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [content, setContent] = useState(localStorage.getItem('content') || '');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(localStorage.getItem('category') || '');
    const [subCategory, setSubCategory] = useState(localStorage.getItem('subCategory') || '');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [filteredSubCategories, setFilteredSubCategories] = useState([]);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await axiosInstance.get('posts/form-data');
                setCategories(response.data.categories);
                setSubCategories(response.data.subCategories);

                if (!category && response.data.categories.length > 0) {
                    const defaultCategory = response.data.categories[0].id;
                    setCategory(defaultCategory);
                    const filtered = response.data.subCategories.filter(sub => sub.category_id === defaultCategory);
                    setFilteredSubCategories(filtered);
                    if (filtered.length > 0) {
                        setSubCategory(filtered[0].id);
                    }
                }
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchFormData();
    }, []);

    useEffect(() => {
        if (category) {
            const filtered = subCategories.filter(sub => sub.category_id === parseInt(category));
            setFilteredSubCategories(filtered);
            if (filtered.length > 0) {
                setSubCategory(filtered[0].id);
            } else {
                setSubCategory('');
            }
        }
    }, [category, subCategories]);

    // Auto-save logic: Save content to localStorage as user types
    useEffect(() => {
        localStorage.setItem('title', title);
    }, [title]);

    useEffect(() => {
        localStorage.setItem('content', content);
    }, [content]);

    useEffect(() => {
        localStorage.setItem('category', category);
    }, [category]);

    useEffect(() => {
        localStorage.setItem('subCategory', subCategory);
    }, [subCategory]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleEditorChange = (value) => {
        setContent(value);
    };

    const handleSubmit = async (e, isPublish = false) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
        formData.append('category_id', category);
        formData.append('sub_category_id', subCategory);
        formData.append('is_publish', isPublish ? 1 : 0);

        try {
            await axiosInstance.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            localStorage.removeItem('title');
            localStorage.removeItem('content');
            localStorage.removeItem('category');
            localStorage.removeItem('subCategory');
           
            navigate('/profile', { state: { success: isPublish ? 'Post published successfully.' : 'Post saved as draft.' } });
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className="rounded-lg">
             <Title title={`Create Post`} />
            <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
            <form onSubmit={(e) => handleSubmit(e, false)}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                    {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title[0]}</span>}
                </div>

             
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700  font-bold mb-2">Content</label>
                    <div
                        className="rounded-lg border-2 border-gray-300 focus-within:border-blue-600 focus-within:shadow-outline"
                       
                    >
                        <div className="quill-container focus-within:border-blue-600 focus-within:shadow-outline">
                            {/* Custom wrapper */}
                            <ReactQuill
                                value={content}
                                placeholder="Write your content here..."
                                onChange={handleEditorChange}
                                className="overflow-x-auto focus-within:border-blue-600 focus-within:shadow-outline quill-editor"
                                modules={{
                                    toolbar: [
                                        ['bold', 'italic', 'underline'], // Include only bold, italic, and underline
                                        ['link'] // Include link
                                    ],
                                }}
                                formats={[
                                    'bold', 'italic', 'underline', 'link' // Enable only bold, italic, underline, and link
                                ]}
                            />
                        </div>
                    </div>

                    {errors.content && <span className="text-red-500 text-sm mt-1">{errors.content[0]}</span>}
                </div>


                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
                    >
                        {categories.length === 0 ? (
                            <option value="">No category found</option>
                        ) : (
                            categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))
                        )}
                    </select>
                    {errors.category_id && <span className="text-red-500 text-sm mt-1">{errors.category_id[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-gray-700 text-sm font-bold mb-2">SubCategory</label>
                    <select
                        id="subCategory"
                        name="subCategory"
                        value={subCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
                    >
                        {filteredSubCategories.length === 0 ? (
                            <option value="">No subcategory found</option>
                        ) : (
                            filteredSubCategories.map((sub) => (
                                <option key={sub.id} value={sub.id}>{sub.name}</option>
                            ))
                        )}
                    </select>
                    {errors.sub_category_id && <span className="text-red-500 text-sm mt-1">{errors.sub_category_id[0]}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Thumbnail</label>
                    <input
                        type="file"
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                    />
                    {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image[0]}</span>}
                </div>



                <div className="flex space-x-4">
                    {/* Save to Draft Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save to Draft
                    </button>

                    {/* Publish Button */}
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={(e) => handleSubmit(e, true)}
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
