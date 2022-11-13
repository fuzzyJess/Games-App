import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

import * as api from "../Api";

const Comments = ({ review_id, user }) => {
  console.log(user, "< user in comments")
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
              
            </li>
          );
        })}
      </ul>
    </section>
    );

 
};

export default Comments;
