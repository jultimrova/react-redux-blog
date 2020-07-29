import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const BASE_URL = 'https://bloggy-api.herokuapp.com';

export function fetchPosts () {
    const request = axios.get(`${BASE_URL}/posts`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPost (id: number) {
    const request = axios.get(`${BASE_URL}/posts/${id}`)

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function createPost (values: string, callback: any) {
    const request = axios.post(`${BASE_URL}/posts`, values)
        .then(() => callback())

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost (id: number, callback: any) {
    const request = axios.delete(`${BASE_URL}/posts/${id}`)
        .then(() => callback())

    return {
        type: DELETE_POST,
        payload: id
    }
}
