import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author={'alhaos'} body={'some text'} />
        <Post author={'alhaos'} body={'some text'} />
      </ul>
    </>
  );
}

export default PostList;
