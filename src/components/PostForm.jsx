import React from 'react';
 import './PostForm.css'

const PostForm = ({ addPost, postText, onPostTextChange, onReset }) => {
     const handleSubmit = (event) => {
          event.preventDefault();

           if (postText.trim() === '') {
          return;
    }

    addPost(postText);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
           className='box'
               value={postText}
              onChange={onPostTextChange}
               placeholder="Type something.."
             rows={4}
              cols={50}
      ></textarea>
                <div className='button'>
                        <button className='post'type="submit">POST</button>
                         <button className='reset' type="button" onClick={onReset}>RESET</button>
                    </div>
              </form>
  );
};

export default PostForm;
