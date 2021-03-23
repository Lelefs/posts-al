/* eslint-disable react/no-array-index-key */
import { useHistory } from 'react-router-dom';
import { usePost } from '../../hooks/posts';

import Post from '../../components/Post';

import { Container, PostsHead } from './styles';

export default function ListPosts() {
  const { postsList } = usePost();
  const history = useHistory();

  return (
    <Container>
      <PostsHead>
        <h2>Posts</h2>
        <button
          type="button"
          className="edit-button"
          onClick={() => {
            history.push('/create/post');
          }}
        >
          Add post
        </button>
      </PostsHead>
      {postsList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
  );
}
