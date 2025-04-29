import { useCase, useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function cancelHandler() {}

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onCancel={cancelHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={'alhaos'} body={'some text'} />
      </ul>
    </>
  );
}

export default PostList;
