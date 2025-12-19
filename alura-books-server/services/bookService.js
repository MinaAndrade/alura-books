const fs = require("fs"); //importa o módulo de sistema de arquivos do Node.js (ler/escrever arquivos)

const booksList = JSON.parse(fs.readFileSync("livros.json", "utf-8"));

function getAllBooks() {
  // Lógica para obter todos os livros
  return booksList; //lê o conteúdo do arquivo livros.json de forma síncrona e converte de JSON para objeto JavaScript
}

function getBookById(id) {
  const filteredBook = booksList.filter((book) => book.id === Number(id))[0];

  if (!filteredBook) {
    throw new Error("Livro não encontrado");
  }

  return filteredBook;
}

function insertBook(newBook) {
  if (!newBook.id) {
    newBook.id = adicionaId();
  }

  const idExists = booksList.find((book) => book.id === newBook.id);

  if (idExists) {
    throw new Error("ID já existente");
  } else {
    const newBookList = [...booksList, newBook];
    fs.writeFileSync("livros.json", JSON.stringify(newBookList)); //cria um arquivo livros.json e escreve um array de objetos convertido para JSON nele
  }
}

function adicionaId() {
  if (booksList.length === 0) return "1";

  // Extrai todos os IDs, converte para número e acha o maior
  const ids = booksList.map((book) => parseInt(book.id, 10)); //Vai percorrer a lista de livros, pegar o id de cada livro, converter para número e criar um novo array só com esses ids
  const maxId = Math.max(...ids); //Usa o operador spread (...) para passar todos os ids como argumentos separados para Math.max
  const newId = maxId + 1;

  return newId;
}

function updateBook(updatedData, id) {
  let books = JSON.parse(fs.readFileSync("livros.json", "utf-8"));
  const bookIndex = books.findIndex((book) => book.id === Number(id)); //passando o string para evitar problemas de comparação entre number e string

  if (bookIndex === -1) {
    throw new Error("Livro não encontrado");
  }

  const updatedBook = { ...books[bookIndex], ...updatedData };
  books[bookIndex] = updatedBook;

  fs.writeFileSync("livros.json", JSON.stringify(books));
}

function deleteBookById(id) {
  const bookIndex = booksList.findIndex((book) => book.id === Number(id));

  if (bookIndex === -1) {
    throw new Error("Livro não encontrado");
  }

  booksList.splice(bookIndex, 1); //remove o livro do array
  fs.writeFileSync("livros.json", JSON.stringify(booksList));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteBookById,
  adicionaId,
};
