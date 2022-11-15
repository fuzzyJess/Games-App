import axios from 'axios'

export const gameApi = axios.create({baseURL: 'https://fierce-scarf-hare.cyclic.app/'});

export const fetchReviews = (category, sort_by, order) => {
    return gameApi.get('/api/reviews', {params: {category, sort_by, order}}).then((res) => {
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

// path to add in vote - takes review_id & vote variable to increment/decrement vote
export const changeVotes = (review_id, vote) => {
    return gameApi.patch(`/api/reviews/${review_id}`, {inc_votes: vote}).then((res) => {
    
    return res.data.updatedReview.votes;})
}

export const fetchComments = (review_id) => {
    
    return gameApi.get(`/api/reviews/${review_id}/comments`).then((res) => {
    
    return res.data.comments;})
}

export const postComment = (body, review_id, username) => {
    const newComment = {
        body: body,
        username: username
    }
    return gameApi.post(`/api/reviews/${review_id}/comments`, newComment).then((res) => {

           return res.data.newComment;
    })

}

export const fetchUsers = () => {
    
    return gameApi.get(`/api/users`).then((res) => {
    
    return res.data.users;})
}

export const deleteComment = (comment_id) => {
    
    return gameApi.delete(`/api/comments/${comment_id}`).then((res) => {
        
    return res.data;})
}