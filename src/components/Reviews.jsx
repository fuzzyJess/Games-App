import { useState, useEffect } from 'react'
import { fetchReviews } from './Apis'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews().then((response) => {
            setReviews(response.reviews)
        })
    }, [])

    console.log(reviews)

    return (
        <>
            <p>Game Reviews</p>
                <section id="reviews">
                    {
                        reviews.map((review) => {
                            return (
                                <article>
                                <img id={review.review_id} alt={review.title} src={review.review_img_url} />
                                <p>
                                    {review.title} <br />
                                    {review.created_at} <br />
                                    {review.owner}
                                </p>    
                                </article>
                            )
                        })
                    }
                </section>
        </>
    )
  }
  
  export default Reviews