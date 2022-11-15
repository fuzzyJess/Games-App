import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

import * as api from "../Api";

const Review = ({user}) => {
  const [review, setReview] = useState([]);
  const [voteIncrement, setVoteIncrement] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { review_id } = useParams();

  let isDecDisabled = true;
  useEffect(() => {}, [isDecDisabled]);

  const handleAddVote = () => {
    if (voteIncrement) {
      setVoteIncrement(false);
      api
        .changeVotes(review_id, -1)
        .then((votes) => {})
        .catch((err) => {
          setErr(err);
          // if err then will remove vote from count being displayed
          setVoteIncrement(true);
        });
    } else {
      setVoteIncrement(true);
      api
        .changeVotes(review_id, +1)
        .then((votes) => {})
        .catch((err) => {
          setErr(err);
          // if err then will remove vote from count being displayed
          setVoteIncrement(false);
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchReview(review_id)
      .then((review) => {
        setReview(review);
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
    <main>
      <section id="rev_card">
        <h3>{review.title}</h3>
        <p>
          author: {review.owner}
          <br />
          game category: {review.category}
          <br />
          created on: {review.created_at.slice(0, 10)}
        </p>
        <section id="rev_content">
          <p>{review.review_body}</p>
          <img
            id={review.review_id}
            alt={review.title}
            src={review.review_img_url}
            className="review_img"
          ></img>
          <br/>
          <button onClick={handleAddVote} className="vote" aria-label="vote">
            👍 {review.votes + voteIncrement}
          </button>
        </section>
      </section>
      <Comments review_id={review.review_id} user={user} />
    </main>
  );
};

export default Review;
