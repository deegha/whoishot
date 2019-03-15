/**
 * Created by Deegha Galkissa
 */

import { fetchPosts } from '../services/backendClient'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST
})

const getPostsFail = () => ({
  type: GET_POSTS_FAIL
})

const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts
})

export const getPosts = () => async (dispatch) => {

  dispatch(getPostsRequest())
  try{
    const posts = await fetchPosts()
    dispatch(getPostsSuccess(posts))
  }catch(err) {
    dispatch(getPostsFail())
  }
  
}