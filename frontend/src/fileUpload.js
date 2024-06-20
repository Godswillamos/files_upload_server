// components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleFileUpload = async () => {
    try{
      if (selectedFile) {
        const formData = new FormData();
        let count = 0
        while(count < selectedFile.length){
          formData.append(`files`, selectedFile[count]); // 'avatar' is the name used for the file in form data
        count++
        }
      // formData.append('files', selectedFile); // 'avatar' is the name used for the file in form data

      
        // Send the file to your backend using Axios or fetch
        const response = await axios.post('http://192.168.88.21:5000/files', formData);
        alert(response.data); // Handle the response from the backend
      
    } else {
      alert('No file selected.');
    }
  }catch(err){}
    
  };

  return (
    <div>
      <input type="file" name="files" multiple="multiple" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;