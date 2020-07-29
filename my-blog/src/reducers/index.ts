import {combineReducers} from "redux"
import {reducer as formReducer} from 'redux-form'
import PostsReducer from './posts-reducer'

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer