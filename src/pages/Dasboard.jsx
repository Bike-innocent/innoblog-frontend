

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Dashboard() {
    const [content, setContent] = useState('<p>This is the initial content of the editor</p>');

    const handleEditorChange = (value) => {
        setContent(value);
        console.log("Content was updated:", value);
    };

    return (
        <ReactQuill value={content} onChange={handleEditorChange} />
        
    );
}

export default Dashboard;

