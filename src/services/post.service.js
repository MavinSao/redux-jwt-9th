import axios from "axios"
import api from "../utils/api"
import { header } from "../utils/header"

export const handleFetchPost = async () => {
    let response = await api.get('posts', { headers: header() })
    return response.data.payload
}

export const handlePostData = async (caption, image) => {
    let response = await api.post('posts/create', { caption, image }, { headers: header() })
    return response.data.success
}

export const handleDeletePost = async (id) => {
    console.log(header());
    let response = await api.delete(`posts/${id}/delete`, { headers: header() })
    return response.data.success
}

export const handleUpdatePost = async (id, caption, image) => {
    let response = await api.put(`posts/${id}/update`, { caption, image }, { headers: header() })
    return response.data.success
}