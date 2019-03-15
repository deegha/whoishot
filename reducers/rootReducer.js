import { combineReducers } from "redux"

import { windowReducer as dimentions } from "./windowReducer"
import { postsReducer as posts } from './postsReducer'

export const rootReducer = combineReducers({
  dimentions,
  posts
})