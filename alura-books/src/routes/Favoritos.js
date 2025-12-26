import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoriteBook, getAllFavoriteBooks } from '../services/favoriteService';
import AppContainer from '../components/AppContainer';
import { Title } from '../components/Title';

const AllResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  transition: all 0.3s ease; /* Suaviza a transição do hover */
  cursor: pointer;
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 15rem;   /* Largura fixa */
  height: 22rem;  /* Altura fixa ou min-height nos cards */
  gap: 10px;
  padding: 30px;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1); /* Um leve fundo para destaque */
    transform: translateY(-5px); /* Efeito visual moderno sem quebrar layout */
  }

  h2 {
    font-size: 18px;
    color: #ffffff;   
 }

  p {
    font-size: 14px;
    color: #ffffff;
    min-height: 34px; /* Reserva espaço para 2 linhas */
  }

  img {
    width: 100px;
    height: 150px;
    object-fit: contain; /* Garante que a imagem não distorça */
  }
`;

function Favoritos() {
  const [favorites, setFavorites] = useState([]);  // Estado para armazenar os livros favoritos

  async function fetchFavorites() {  // Função para buscar os livros favoritos
    const ApiFavorites = await getAllFavoriteBooks();  // Chama o serviço para obter os livros favoritos
    setFavorites(ApiFavorites);  // Atualiza o estado com os livros favoritos obtidos
  }

  async function deleteFavorite(id) {
    await deleteFavoriteBook(id);
    await fetchFavorites();
  }

  useEffect(() => {
    fetchFavorites(); // Chama a função de busca quando o componente é montado
  }, []);

  return (
    <AppContainer>  
      <Title>Meus Favoritos</Title>
        <AllResults>
          {favorites.map(favorite => (
          <Result onClick={() => deleteFavorite(favorite.id)}>
            <h2>{favorite.title}</h2>
            <img src={`http://localhost:8000${favorite.src}`} alt={favorite.title} />
            <p>{favorite.author}</p>
          </Result>  
      ))}
        </AllResults>
  </AppContainer>
  );
}

export default Favoritos;
