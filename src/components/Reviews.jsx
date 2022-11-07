import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as api from "../Api";

const sort_options = [
  {value: 'created_at', text: 'date'},
  {value: 'title', text: 'title'},
  {value: 'comment_count', text: 'comments'},
  {value: 'votes', text: 'votes'}  
];

const order_options = [
  {value: 'ASC', text: 'ascending'},
  {value: 'DESC', text: 'descending'}
]

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // set state to hold whether sort_by or order_by has been selected.
  const [sort_option, setSortOption] = useState('created_at');
  const [order_by, setOrderBy] = useState("DESC");

  const [err, setErr] = useState(null);

  // adjust useEffect for when values in sort_by/order_by state change to call the api with new params



  useEffect(() => {
    setIsLoading(true);
    api
      .fetchReviews(undefined, sort_option, order_by)
      .then((response) => {
        setReviews(response);
        setIsLoading(false);
        // poss if (>200){deal with diff errors}
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(true);
      });
    // should rerender when an option is selected...
  }, [sort_option, order_by]);

  
  //set state to selected option
  const handleSortChange = () => {
    setSortOption(document.getElementById("sort_by").value);
  };

  const handleOrderChange = () => {
    setOrderBy(document.getElementById("order_by").value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <main id="reviews">
                <label htmlFor="sort_by">sort by</label>
        <select name="sort_by" id="sort_by" onChange={handleSortChange} defaultValue={sort_option}>
          {sort_options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>
          })}
        </select>
        <label htmlFor="order_by">order by</label>
        <select name="order_by" id="order_by" onChange={handleOrderChange} defaultValue={order_by}>
        {order_options.map((order) => {
            return <option key={order.value} value={order.value}>{order.text}</option>
          })}
        </select>

        <ul>
          {reviews.map((review) => {
            return (
              <li className="review_card" key={review.review_id}>
                <Link to={`/reviews/${review.review_id}`}>
                  <img
                    id={review.review_id}
                    alt={review.title}
                    src={review.review_img_url}
                    className="thumbnail"
                  />
                </Link>
                <p>
                  {review.title} <br />
                  <br />
                  {review.created_at.slice(0, 10)} <br />
                  {review.owner} <br />
                  🗨 {review.comment_count}
                  <br />
                  👍 {review.votes}
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
