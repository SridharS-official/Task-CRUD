import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, setPost, deletePost } from '../utils/localStorage';

const PostPage = () => {
             const { Id } = useParams();
             const history = useHistory();
               const [text, setPostText] = useState('');

  useEffect(() => {
    const post = getPost(Id);

    if (post) {
      setPostText(post);
    } else {
      history.push('/');
    }
  }, [Id, history]);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleUpdatePost = () => {
    if (text.trim() === '') {
      return;
    }

    setPost(Id, text);
  };

  const handleDeletePost = () => {
    deletePost(Id);
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Post</h1>
         <textarea
               value={text}
                  onChange={handlePostTextChange}
                placeholder="Type something..."
                 rows={4}
                  cols={50}
        ></textarea>
                  <button onClick={handleUpdatePost}>Update</button>
                   <button onClick={handleDeletePost}>Delete</button>
    </div>
  );
};

export default PostPage;

