const { getAllFavoriteBooks, insertFavoriteBook, deleteFavoriteBookById } = require("../services/favoriteService");

function getFavoriteBooks(req, res) {
  try {
    const books = getAllFavoriteBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send("Ocorreu um erro interno no servidor.");
  }
}

function postFavoriteBook(req, res) {
  try { 
    const id = req.params.id;
    insertFavoriteBook(id);
    res.status(201).send("Livro adicionado com sucesso!");
    } catch (error) {
        if (error.message === "ID já existente") {
            return res.status(409).send(error.message);
        }
    res.status(500).send("Ocorreu um erro interno no servidor.");
  }
}

function deleteFavoriteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteFavoriteBookById(id);
      res.send("Livro deletado com sucesso!");
    } else {
      res.status(422).send("ID inválido.");
    }
  } catch (error) {
    if (error.message === "Livro não encontrado") {
      return res.status(404).send(error.message);
    }
    res.status(500).send("Ocorreu um erro interno no servidor.");
  }
}

module.exports = {
  getFavoriteBooks,
  postFavoriteBook,
  deleteFavoriteBook,
};
