import React from 'react'
import parse from 'html-react-parser'

const ShowPost = ({content}) => {
  return (
    <div className='outputdiv'>
      {content && typeof content === 'string' ? parse(content) : "No content available"}
    </div>
  )
}

export default ShowPost
