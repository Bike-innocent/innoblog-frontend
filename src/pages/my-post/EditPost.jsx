import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Processing from '../../components/Processing';
import Loader from '../../components/Loader';

const EditPost = () => {
    const { slug } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [filteredSubCategories, setFilteredSubCategories] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axiosInstance.get(`/posts/${slug}`);

                const post = response.data.post;
                setTitle(post.title);
                setContent(post.content); // Set content for ReactQuill
                setCategory(post.category_id);
                setSubCategory(post.sub_category_id);
            } catch (error) {
                console.error('Error fetching post data:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchFormData = async () => {
            try {
                const response = await axiosInstance.get('posts/form-data');
                setCategories(response.data.categories);
                setSubCategories(response.data.subCategories);
            } catch (error) {
                console.error('Error fetching form data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
        fetchFormData();
    }, [slug]);

    useEffect(() => {
        if (category) {
            const filtered = subCategories.filter(sub => sub.category_id === parseInt(category));
            setFilteredSubCategories(filtered);
            if (!filtered.some(sub => sub.id === parseInt(subCategory))) {
                setSubCategory(filtered.length > 0 ? filtered[0].id : '');
            }
        }
    }, [category, subCategories, subCategory]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('title', title);
        formData.append('content', content); // Use content from ReactQuill
        if (image) {
            formData.append('image', image);
        }
        formData.append('category_id', category);
        formData.append('sub_category_id', subCategory);

        try {
            await axiosInstance.post(`/posts/${slug}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/profile', { state: { success: 'Post updated successfully.' } });
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="rounded-lg">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1 className="text-2xl font-semibold mb-4">Edit Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input
                                type="text"
                                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600 focus:outline-none focus:shadow-outline"
                                id="title"
                                name="title"
                                value={title}
                                onChange={handleInputChange}
                            />
                            {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title[0]}</span>}
                        </div>
                        <div className="mb-4">

                            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>

                            <div
                                className="rounded-lg border-2 border-gray-300 focus-within:border-blue-600 focus-within:shadow-outline"
                                onClick={(e) => {
                                    const toolbarElement = document.querySelector('.ql-toolbar'); // Get the toolbar element
                                    const linkInput = document.querySelector('.ql-tooltip input[type="text"]'); // Get the link input field

                                    // Check if the click is inside the toolbar or the link input field
                                    if (
                                        (toolbarElement && toolbarElement.contains(e.target)) ||
                                        (linkInput && linkInput.contains(e.target))
                                    ) {
                                        // If the click is inside the toolbar or link input, don't focus the editor
                                        return;
                                    }

                                    setTimeout(() => {
                                        document.querySelector('.quill-editor .ql-editor').focus(); // Ensure focus is set on the editable area
                                    }, 0);
                                }}
                                tabIndex={0} // Makes the div focusable
                            >
                                <div className="quill-container focus-within:border-blue-600 focus-within:shadow-outline">
                                    {/* Custom wrapper */}
                                    <ReactQuill
                                        value={content}
                                        placeholder="Write your content here..."
                                        onChange={handleEditorChange}
                                        className="max-h-96 min-h-64 overflow-x-auto focus-within:border-blue-600 focus-within:shadow-outline quill-editor"
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
                                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600 focus:outline-none focus:shadow-outline"
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
                                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600 focus:outline-none focus:shadow-outline"
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
                            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                            <input
                                type="file"
                                className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600 focus:outline-none focus:shadow-outline"
                                id="image"
                                name="image"
                                onChange={handleImageChange}
                            />
                            {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image[0]}</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={processing}
                            >
                                {processing ? <Processing text='Updating...' /> : 'Update Post'}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default EditPost;
