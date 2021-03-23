import { useHistory } from 'react-router-dom';
import { usePost } from '../../hooks/posts';

import { Container } from './styles';

export default function Post({ post, user }) {
  const history = useHistory();
  const { deletePost } = usePost();

  function handleDelete(id) {
    const deleting = deletePost(id);
    if (deleting) {
      return history.goBack();
    }
    return console.error('Error deleting post');
  }

  return (
    <Container>
      <div>
        <p>
          {post.id} - {post.title}
        </p>
        {user ? (
          <button
            type="button"
            className="edit-button"
            onClick={() => {
              history.push(`/${post.id}/edit`, { params: post });
            }}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="open-button"
            onClick={() => {
              history.push(`/${post.id}`, { params: post });
            }}
          >
            Open
          </button>
        )}
        <button
          type="button"
          className="delete-button"
          onClick={() => {
            handleDelete(post.id);
          }}
        >
          Delete
        </button>
      </div>
      {user && (
        <>
          <p>{post.body}</p>
          <p>Autor: {user.name}</p>
        </>
      )}
    </Container>
  );
}
