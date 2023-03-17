import { instance } from './request'
export default function fetchData(url) {
    return new Promise((resolve, reject) =>
        instance
        .get(url)
        .then((response) => {
            resolve(response.data)
        })
        .catch((error) => {
            reject(error)
        })
    )
}