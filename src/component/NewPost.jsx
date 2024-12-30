import React, { useState } from 'react'
import Tiptap from './Tiptap'
import ShowPost from './ShowPost';

const NewPost = () => {
    const [htmlContent , setHtmlContent]=useState();
    const handleEditorContentSave=(html)=>{
        setHtmlContent(html);
    }
  return (
    <center className='main_container'>
      <Tiptap onEditorContentSave={handleEditorContentSave}/>
      <ShowPost content={htmlContent}/>
    </center>
  )
}

export default NewPost
