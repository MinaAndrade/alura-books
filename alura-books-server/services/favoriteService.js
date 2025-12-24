const fs = require("fs");

const favoriteBooksList = JSON.parse( fs.readFileSync("favoritos.json", "utf-8") );

function getAllFavoriteBooks() {
  return favoriteBooksList;
}

function insertFavoriteBook(id) {
  const idExists = favoriteBooksList.find((book) => book.id === Number(id));

  if (idExists) {
    throw new Error("ID já existente");
  } else {
    const book = JSON.parse(fs.readFileSync("livros.json", "utf-8"));
    const bookToAdd = book.find(( book => book.id === Number(id)));
    const newBookList = [...favoriteBooksList, bookToAdd];
    fs.writeFileSync("favoritos.json", JSON.stringify(newBookList)); 
  }
}

function deleteFavoriteBookById(id) {
    const bookIndex = favoriteBooksList.findIndex((book) => book.id === Number(id));
    
      if (bookIndex === -1) {
        throw new Error("Livro não encontrado");
      }
      favoriteBooksList.splice(bookIndex, 1); //remove o livro do array
      fs.writeFileSync("favoritos.json", JSON.stringify(favoriteBooksList));
    }

module.exports = {
  getAllFavoriteBooks,
  insertFavoriteBook,
  deleteFavoriteBookById,
};
