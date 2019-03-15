/**
 * Created by Deegha Galkissa
 */

import * as Action from '../actions/postsActions'

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

export const postsReducer = (state=initialState, action) => {
  switch(action.type) {
    case Action.GET_POSTS_FAIL:
      return {
        ...state,
        loading: false
      }
    case Action.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case Action.GET_POSTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        posts: action.posts
      }
    default:
      return state
  }
}

