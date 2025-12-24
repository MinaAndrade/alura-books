import axios from "axios";

const booksAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getAllFavoriteBooks() {
  const response = await booksAPI.get('/');
  return response.data;
}

export {
    getAllFavoriteBooks
}