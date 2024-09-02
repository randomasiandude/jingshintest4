import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        axios.post(`https://jingshin4-457d8aeb5d8c.herokuapp.com/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('File uploaded successfully');
            // Optionally, redirect or update the UI
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    };

    return (
        <div>
            <h1>4444444444444</h1>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default Upload;
