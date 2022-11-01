import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import * as api from '../Api';

const Category = () => {
    const [gameCategory, setGameCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    const {category} = useParams();
   
    useEffect(() => {
        setIsLoading(true)
        api.fetchReviews(category).then((reviews) => {
        setGameCategory(reviews);
        setIsLoading(false);
        setErr(null)
    }).catch((err) => {
        setErr(err)
        setIsLoading(true);
    });
}, [category]);

if (isLoading) return <p>Loading...</p>;
if (err) return <p>{err}</p>;
  


    return (
        <main>
            <p>Reviews with {category} as the category</p>
            <ul>
                {gameCategory.map((review) => {
                    return (<li key={review.review_id}> <img
                        id={review.review_id}
                        alt={review.title}
                        src={review.review_img_url}
                      />
                      <p>
                        {review.title} <br />
                        {review.created_at} <br />
                        {review.owner}
                      </p></li>)
                })}
                
            </ul>
        </main>
    )
}

export default Category