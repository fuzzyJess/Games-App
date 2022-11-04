import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import * as api from '../Api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // set state to hold whether sort_by or order_by has been selected.
    const[sortBy, setSortBy] = useState("created_at");
    const[orderBy, setOrderBy] = useState("desc");
    // adjust useEffect for when values in sort_by/order_by state change to call the api with new params

    const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    api.fetchReviews(undefined, sortBy, orderBy).then((response) => { 
     
      setReviews(response);
      setIsLoading(false);
          // poss if (>200){deal with diff errors}
        setErr(null)
    }).catch((err) => {
        setErr(err)
        setIsLoading(true);
    });
    // should rerender when an option is selected...
  }, [sortBy, orderBy]);


  //set state to selected option
  const handleSortChange =() => {
    setSortBy(document.getElementById("sort_by").value)
   
  }

  const handleOrderChange =() => {
    setOrderBy(document.getElementById("order_by").value)
  }

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <main id="reviews">
      <label htmlFor="sort_by">sort by</label>
      <select name="sort_by" id="sort_by" onChange={handleSortChange}>
        <option value="sort">sort by</option>
        <option value="title">title</option>
        <option value="designer">designer</option>
        <option value="owner">owner</option>
        <option value="created_at">date</option>
      </select>
      <label htmlFor="order_by">order by</label>
      <select name="order_by" id="order_by" onChange={handleOrderChange}>
        <option value="order">order by</option>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
       
        <ul>
          {reviews.map((review) => {
            return (
              <li className="review_card" key={review.review_id}>
                <Link to={`/reviews/${review.review_id}`} >
                  <img
                  id={review.review_id}
                  alt={review.title}
                  src={review.review_img_url}
                  />
                </Link>
                <p>
                  {review.title} <br />
                  {review.created_at.slice(0, 10)} <br />
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
