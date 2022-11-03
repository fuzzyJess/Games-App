import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

import * as api from "../Api";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
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
  }, [review_id]);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

if (comments.length !== 0) {
    return (
    <section id="comments">
      <CommentForm/>
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              created on: {comment.created_at.slice(0, 10)} <br />
              author: {comment.author} <br />
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
    );
} else {
    return (
        <section id="comments">
            <h4>Be the first to comment</h4>
      <CommentForm/>
        </section>
    )
}

 
};

export default Comments;
