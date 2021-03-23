import { Switch, Route, Redirect } from 'react-router-dom';

import EditPost from '../pages/EditPost';
import ListPosts from '../pages/ListPosts';
import Post from '../pages/Post';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ListPosts} />
      <Route path="/create/post" component={EditPost} />
      <Route path="/:id" exact component={Post} />
      <Route path="/:id/edit" component={EditPost} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
