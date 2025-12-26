import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Title } from "../Title";
import { getAllBooks } from "../../services/bookService";
import { addFavoriteBook } from "../../services/favoriteService";

const SearchContainer = styled.section`
  width: 100%;
  min-height: 100%;   /* Garante que ocupe a altura disponível do flex: 1 do pai */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Começa do topo para evitar saltos ao filtrar */
  gap: 20px;

  scroll-snap-align: start; 
  flex-shrink: 0; /* Impede que a seção seja esmagada */
`;

const Subtitulo = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 400;
`;

const AllResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
  
  width: 15rem;
  padding: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transform: translateY(-5px); /* Efeito visual moderno sem quebrar layout */
  }

  p {
    font-size: 16px;
    color: #ffffff;
    font-weight: 500;
  }

  img {
    width: 100px;
    height: 150px;
    object-fit: contain; /* Garante que a imagem não distorça */
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
`;

function Search() {
  const [searchValue, setSearchValue] = useState([]);
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const ApiBooks = await getAllBooks();
    setBooks(ApiBooks);
  }

  async function insertFavorite(id) {
    await addFavoriteBook(id);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <SearchContainer>
      <Title>Já sabe o livro que está procurando?</Title>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(event) => {
          const textFilled = event.target.value.trim().toLowerCase();

          if (!textFilled) {
            setSearchValue([]);
            return;
          }

          const result = books.filter((book) =>
            book.title.toLowerCase().includes(textFilled)
          );
          setSearchValue(result);
        }}
      />
      <AllResults>
        {searchValue.map((book) => (
          <Result key={book.id} onClick={() => insertFavorite(book.id)}>
            <p>{book.title}</p>
            <img src={`http://localhost:8000${book.src}`} alt={book.title} />
          </Result>
        ))}
      </AllResults>
    </SearchContainer>
  );
}

export default Search;
