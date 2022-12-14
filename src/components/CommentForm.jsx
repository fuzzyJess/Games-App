import { useState, } from "react";

import * as api from "../Api";

const CommentForm = ({ review_id, setComments, user }) => {

  const [addedComment, setAddedComment] = useState("");
  const [err, setErr] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    api.postComment(addedComment, review_id, user.username).then((res) => {
     
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
  // when nothing has been added in the comment box button to submit comment is disabled
  let isEmpty = addedComment.length === 0;
  // when logged in as guest button to submit comment is disabled
  isEmpty = user.username === 'guest';
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="form_body">Enter a comment</label>
        <textarea onChange={handleOnchange} value={addedComment} id="form_body" type="text" />
        <p>
          <button disabled={isEmpty} type="submit" id="submit">
            submit
          </button> <br/>
          {isEmpty && <span>Please enter a comment</span>}
        </p>
    </form>
  );
  
};

export default CommentForm;
