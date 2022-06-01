import api from "../utils/api"

export const uplaodImage = async (imageFile) => {
    let formData = new FormData()
    formData.append('file', imageFile)
    let response = await api.post('files/upload', formData)
    return response.data
}