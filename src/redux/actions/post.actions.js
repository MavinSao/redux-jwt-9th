import { handleDeletePost, handleFetchPost } from '../../services/post.service'
import { postAction as action } from './post.action.type'

export const onFetchPost = () => async dp => {
    const posts = await handleFetchPost()
    dp({
        type: action.GET_POST,
        payload: posts
    })
}


export const deletePost = (id) => async dp => {
    const isSuccess = await handleDeletePost(id)
    if (isSuccess) {
        dp({
            type: action.DELETE_POST,
            payload: id
        })
    }
}