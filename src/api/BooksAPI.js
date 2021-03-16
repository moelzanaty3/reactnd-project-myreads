import { APIErrorHandling } from '../errors'

const api = 'https://reactnd-books-api.udacity.com'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const getBookById = bookId =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(({ book }) => book)
    .catch(error => {
      APIErrorHandling(error)
    })

export const getAllBooks = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(({ books }) => books)
    .catch(error => {
      APIErrorHandling(error)
    })

export const updateBook = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  })
    .then(res => res.json())
    .catch(error => {
      APIErrorHandling(error)
    })

export const searchBooks = query =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(({ books }) => books)
    .catch(error => {
      APIErrorHandling(error)
    })
