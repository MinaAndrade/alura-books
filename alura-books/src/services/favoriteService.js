import axios from "axios";

const booksAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getAllFavoriteBooks() {
  const response = await booksAPI.get('/');
  return response.data;
}

async function addFavoriteBook(id) {
  await booksAPI.post(`/${id}`);
}

async function deleteFavoriteBook(id) {
  await booksAPI.delete(`/${id}`);
}

export {
    getAllFavoriteBooks,
    addFavoriteBook,
    deleteFavoriteBook
}
