import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

import * as api from "../Api";

const Comments = ({ review_id, user }) => {
  const [comments, setComments] = useState([]);
  const [deleteComment, setDeleteComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchComments(review_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(true);
      });
  }, [review_id, deleteComment]);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  const handleDeleteComment = (comment_id) => {
    api.deleteComment(comment_id)
    .then((response) => {
      setDeleteComment(response);
    })
  }
  
    return (
    <section id="comments">
      <CommentForm review_id={review_id} setComments={setComments} user={user} />
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              created on: {comment.created_at.slice(0, 10)} <br />
              author: {comment.author} <br />
              <p>{comment.body}</p>
              {(comment.author === user.username) ? <button onClick={() => handleDeleteComment(comment.comment_id)}>delete comment</button> : <div />}
            </li>
          );
        })}
      </ul>
    </section>
    );

 
};

export default Comments;
