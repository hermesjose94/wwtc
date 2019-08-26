import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
 
const DropZone2 = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log("FILE-----");
    console.log(status, meta, file) 
  }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { 
    console.log("FILE-----2");
    
    console.log(files.map(f => f.meta)) 
  }
 
  //accept="audio/*"
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={1}
      styles={{ submitButton: { display:'none' } }}
    />
  )
}

export default DropZone2