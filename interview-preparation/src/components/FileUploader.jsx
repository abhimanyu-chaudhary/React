import React, { useState } from 'react'

function FileUploader() {
    const [file, setFile] = useState(null);

    const handleImageFile = (e) => {
        const fileHandler = e.target.files[0];
        setFile(fileHandler);
    }
  return (
    <div className='flex justify-between items-center text-center px-40'>
      <input type="file" accept='file' onChange={handleImageFile} />
      {file ? <img className='h-[80vh] mt-10' src={URL.createObjectURL(file)} alt="" /> : "File will be shown here" }
    </div>
  )
}

export default FileUploader;
