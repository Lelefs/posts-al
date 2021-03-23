import { PostProvider } from './posts';
import { UserProvider } from './users';
import { CommentProvider } from './comments';

const AppProvider = ({ children }) => (
  <PostProvider>
    <CommentProvider>
      <UserProvider>{children}</UserProvider>
    </CommentProvider>
  </PostProvider>
);

export default AppProvider;
