import {combineReducers} from 'redux'
import AuthReducers from './auth-reducers'
import PostReducers from './post-reducers'

export default combineReducers({
    auth: AuthReducers,
    post: PostReducers
})