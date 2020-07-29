import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POSTS = 'CREATE_POSTS'
export const FETCH_POST = 'FETCH_POST'

const BASE_URL = 'https://bloggy-api.herokuapp.com'

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${BASE_URL}/posts`, values)
        .then(() => callback())

    return {
        type: CREATE_POSTS,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${BASE_URL}/posts/${id}`)

    return {
        type: FETCH_POST,
        payload: request
    }
}