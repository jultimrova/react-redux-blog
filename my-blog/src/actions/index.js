import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const BASE_URL = 'https://bloggy-api.herokuapp.com'

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}