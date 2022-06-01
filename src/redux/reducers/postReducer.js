import { postAction as action } from '../actions/post.action.type'
const initialState = {
    posts: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case action.GET_POST:
            return { ...state, posts: [...payload] }
        case action.DELETE_POST: {
            let posts = state.posts.filter(post => post.id !== payload)
            return { ...state, posts: [...posts] }
        }
        default:
            return state
    }
}
