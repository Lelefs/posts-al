import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const CommentContext = createContext({
  comments: [],
  openComments: () => {},
});

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  function openComments(postId) {
    api.get(`/comments/?postId=${postId}`).then(res => {
      setComments(res.data);
    });
  }

  return (
    <CommentContext.Provider value={{ comments, openComments }}>
      {children}
    </CommentContext.Provider>
  );
};

export function useComment() {
  const context = useContext(CommentContext);

  return context;
}
