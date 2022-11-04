import { useState, } from "react";

import * as api from "../Api";

const CommentForm = ({ review_id, setComments }) => {

  const [addedComment, setAddedComment] = useState("");
  const [err, setErr] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    api.postComment(addedComment, review_id, "tickle122").then((res) => {
     
        setComments((curComments) => {
                     
            // updates comments on page
            return [res, ...curComments]})

             //resets value held in addedComment            
            setAddedComment("");
        }).catch((err) => {
          setErr(err)
        })
  };

  const handleOnchange = (event) => {
    setAddedComment(event.target.value)
  }

  if (err) return <p>{err}</p>;
  const isEmpty = addedComment.length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Leave a comment</legend>

        <label htmlFor="form_body">Enter your comment</label>
        <textarea onChange={handleOnchange} value={addedComment} id="form_body" type="text" />
        <p>
          <button disabled={isEmpty} type="submit">
            submit comment
          </button>
          {isEmpty && <span>Please enter a comment</span>}
        </p>
      </fieldset>
    </form>
  );
};

export default CommentForm;
