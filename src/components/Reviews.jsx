import { useState, useEffect } from "react";

import * as api from '../Api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    api.fetchReviews().then((response) => {
      setReviews(response);
      setIsLoading(false);
          // poss if (>200){deal with diff errors}
        setErr(null)
    }).catch((err) => {
        setErr(err)


    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <p>Game Reviews</p>
      <main id="reviews">
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <img
                  id={review.review_id}
                  alt={review.title}
                  src={review.review_img_url}
                />
                <p>
                  {review.title} <br />
                  {review.created_at} <br />
                  {review.owner}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Reviews;
