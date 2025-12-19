const {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteBookById,
  adicionaId,
} = require("../services/bookService");

function getBooks(req, res) {
  try {
    //throw new Error('Erro proposital para teste de middleware de erro');

    const books = getAllBooks(); //chama a função getAllBooks do serviço livro.js para obter todos os livros
    res.send(books);
  } catch (error) {
    res.status(500).send("Ocorreu um erro interno no servidor.");
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBookById(id); //chama a função getBook do serviço livro.js para obter um livro específico
      res.send(book);
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

function postBook(req, res) {
  // Lógica para adicionar um novo livro
  try {
    const newBook = req.body; //obtém os dados do novo livro do corpo da requisição

    if (newBook.title) {
      insertBook(newBook); //chama a função insertBook do serviço livro.js para adicionar o novo livro
      res.status(201).send("Livro adicionado com sucesso!");
    } else {
      res.status(422).send("O título do livro é obrigatório.");
    }
  } catch (error) {
    if (error.message === "ID já existente") {
      return res.status(409).send(error.message);
    }
    res.status(500).send("Ocorreu um erro interno no servidor.");
  }
}

function patchBook(req, res) {
  // Lógica para atualizar um livro existente
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const updatedData = req.body;
      updateBook(updatedData, id);
      res.send("Livro atualizado com sucesso!");
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

function deleteBook(req, res) {
  // Lógica para deletar um livro existente
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteBookById(id);
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
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
