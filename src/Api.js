import axios from 'axios'

export const gameApi = axios.create({baseURL: 'https://fuzzyjess-board-games.herokuapp.com'});

export const fetchReviews = (category) => {
    return gameApi.get('/api/reviews', {params: {category}}).then((res) => {
   
    return res.data.reviews;})
} 

export const fetchCategories = () => {
    return gameApi.get('/api/categories').then((res) => {
   
    return res.data.categories;})
} 

export const fetchReview = (review_id) => {
    return gameApi.get(`/api/reviews/${review_id}`).then((res) => {

    return res.data.review;})
}