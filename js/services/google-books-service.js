import { storageService } from "./async-storage-service.js"

export const googleBooks = {
    query,
}

function query(queryStr){
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript`)
    return storageService.query('googleBooks')
}

