import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as api from '../Api';

const Review = () => {
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    const { review_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        api.fetchReview(review_id).then((review) => {
            setReview(review);
            setIsLoading(false);
            setErr(null)
        }).catch((err) => {
            setErr(err)
            setIsLoading(true);
        });
    }, [review_id]);

    if (isLoading) return <p>Loading...</p>;
    if (err) return <p>{err}</p>;
      
    return (
        <>
            <main id="ind_review">
                <h3>{review.title} review</h3>
                <p>author: {review.owner}<br/>
                game category: {review.category}<br/>
                created on: {review.created_at.slice(0, 10)}
                </p>
                    <section id="rev_content">
                        <p>
                            {review.review_body}
                        </p>
                        <div id="vote" aria-label="click to vote">🗳 {review.votes}</div>
                    </section>
            </main>
        </>
    )
}

export default Review;