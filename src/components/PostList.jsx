import React from 'react';
import './PostList.css'

const PostList = ({ posts}) => {
  return (
    <div >
           {posts.map((post, index) => (
               <div className='list' key={index}>
                         <h3>post: {index + 1}</h3>
                   <p>{post}</p>
                </div>
              ))}
        </div>
         );
     };

export default PostList;
