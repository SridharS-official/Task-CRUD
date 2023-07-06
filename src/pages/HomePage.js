import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { getPostCount, setPostCount, getPost, setPost, deletePost, deleteAllPosts } from '../utils/localStorage';
import './HomePage.css'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [postText, setPostText] = useState('');

  useEffect(() => {
    const storedPosts = [];

    for (let i = 0; i < 10; i++) {
      const post = getPost(i);
      if (post) {
        storedPosts.push(post);
      }
    }

    setPosts(storedPosts);
  }, []);

  const addPost = (postText) => {
         const postCount = getPostCount();
            setPost(postCount, postText);

    if (postCount === 9) {
          setPostCount(0);
               } else {
                setPostCount(postCount + 1);
                }

            setPosts([...posts, postText]);
  };

            const handleDeletePost = (index) => {
              deletePost(index);
        setPosts(posts.filter((_, i) => i !== index));
  };

            const handleDeleteAllPosts = () => {
    deleteAllPosts();
               setPosts([]);
  }             ;

           const handleReset = () => {
        setPostText('');
  };

  const handleViewAll = () => {
           setDisplayAll(true);
             setPostText('');
  };

  const handleHideAll = () => {
               setDisplayAll(false);
  };

  const handlePostTextChange = (event) => {
                 setPostText(event.target.value);
  };

  return (
    <div className='all' >
      {displayAll ? (
        <div>
         
                   <button className="view-all"onClick={handleViewAll}>View All</button>
                  <button className= "Home"onClick={handleHideAll}>Home</button>
                     <p className='flags'>Count: {posts.length}</p>
              <PostList posts={posts} />
        </div>
      ) : (
        <div>
          <h1 className='posts'>Posts</h1>
          <button className ="viewall"onClick={handleViewAll}>View all</button>
          {posts.length > 0 && (
            <div>
                      <button className ="deleteone" onClick={() => handleDeletePost(posts.length - 1)}>Delete One</button>
                        <button className ="deleteall" onClick={handleDeleteAllPosts}>Delete all</button>
            </div>
          )}
          <PostForm
              addPost={addPost}
                     postText={postText}
                    onPostTextChange={handlePostTextChange}
                onReset={handleReset}
             />
         </div>
          )}
        </div>
  );
};

export default HomePage;
