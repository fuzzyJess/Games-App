import { useState, useEffect } from "react";

import * as api from "../Api";

const CommentForm = ({ review_id, setComments }) => {

  const [addedComment, setAddedComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    api.postComment(addedComment, review_id, "tickle122").then((res) => {
        setComments((curComments) => {
            return [res, ...curComments]
        })
    })
  };

  const handleOnchange = (event) => {
    setAddedComment(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Leave a comment</legend>

        <label htmlFor="form_body">Enter your comment</label>
        <input onChange={handleOnchange} id="form_body" type="text" />
        <p>
          <button type="submit">
            submit comment
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default CommentForm;
