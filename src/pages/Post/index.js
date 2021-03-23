import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import { useComment } from '../../hooks/comments';
import { usePost } from '../../hooks/posts';
import { useUser } from '../../hooks/users';

import { Container, CommentsHead, Comments } from './styles';

export default function ListPosts(data) {
  const { id } = useParams();
  const { openPost, postOpened } = usePost();
  const { comments, openComments } = useComment();
  const { user, selectUser } = useUser();

  useEffect(() => {
    openPost(id);
    openComments(id);
    selectUser(data.location.state.params.userId);
  }, [id]);

  if (!postOpened || postOpened.id !== Number(id)) {
    return (
      <div className="loader-div">
        <h1>Please wait...</h1>
      </div>
    );
  }

  return (
    <Container>
      <Post post={postOpened} user={user} />
      <CommentsHead>
        <h2>Comments</h2>
        <button
          type="button"
          className="edit-button"
          onClick={() => {
            console.log('1ushfdsauidhasui');
          }}
        >
          Add comment
        </button>
      </CommentsHead>
      {comments.map(comment => (
        <Comments key={comment.id}>
          <p>Autor: {comment.email}</p>
          <p>{comment.body}</p>
        </Comments>
      ))}
    </Container>
  );
}
