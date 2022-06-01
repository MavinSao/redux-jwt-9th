import api from "../utils/api"
import StringCrypto from 'string-crypto';
import { cryptoEncrypt } from "../utils/crypto";


export const handleLogin = async (username, password) => {
    let response = await api.post('auth/login', { username, password })
    if (response.data.payload.token) {
        let user = response.data.payload
        user.token = cryptoEncrypt(user.token, process.env.REACT_APP_ENCRYPT_KEY)
        localStorage.setItem('user', JSON.stringify(user))
    }
    return response.data.success

}

export const handleRegister = async (fullname, username, password) => {
    let response = await api.post('auth/register', { fullname, username, password })
    console.log(response);
    return response.data.success
}


