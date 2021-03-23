import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const PostContext = createContext({
  postsList: [],
  postOpened: {},
  openPost: () => {},
  deletePost: () => {},
  createPost: () => {},
});

export const PostProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);
  const [postOpened, setPostOpened] = useState();

  useEffect(() => {
    api.get('/posts').then(res => {
      setPostsList(res.data);
    });
  }, []);

  function openPost(id) {
    api.get(`/posts/${id}`).then(res => {
      setPostOpened(res.data);
    });
  }

  function createPost({ title, description }) {
    const newPost = { title, body: description };
    console.log(newPost);
    return 'Ok';
    // api.post('/posts', )
  }

  function deletePost(id) {
    api.delete(`/posts/${id}`);
    const newArray = postsList.filter(post => post.id !== id);
    setPostsList(newArray);
    return 'Post deleted';
  }

  return (
    <PostContext.Provider
      value={{ postsList, postOpened, openPost, deletePost, createPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export function usePost() {
  const context = useContext(PostContext);

  return context;
}
