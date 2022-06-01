import { cryptoDecrypt } from "./crypto";

export const header = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
        let token = cryptoDecrypt(user.token, process.env.REACT_APP_ENCRYPT_KEY)
        return {
            ContentType: "application/json",
            Authorization: 'Bearer ' + token,
        };
    } else {
        return { ContentType: "application/json" }
    }
}