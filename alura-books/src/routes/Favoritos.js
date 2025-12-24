import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllFavoriteBooks } from '../services/favoriteService';
import AppContainer from '../components/AppContainer';

const AllResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  
  width: 100%;
  min-height: 100%;
  padding: 10px;
  transition: all 0.3s ease; /* Suaviza a transição do hover */
  cursor: pointer;

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
  }

  img {
    width: 100px;
    height: 150px;
    object-fit: contain; /* Garante que a imagem não distorça */
  }
`

function Favoritos() {
  const [favorites, setFavorites] = useState([]);  // Estado para armazenar os livros favoritos

  async function fetchFavorites() {  // Função para buscar os livros favoritos
    const ApiFavorites = await getAllFavoriteBooks();  // Chama o serviço para obter os livros favoritos
    setFavorites(ApiFavorites);  // Atualiza o estado com os livros favoritos obtidos
  }

  useEffect(() => {
    fetchFavorites(); // Chama a função de busca quando o componente é montado
  }, []);

  return (
    <AppContainer flexDirection="row">
      {favorites.map(favorite => (
        <AllResults key={favorite.id}>
          <h2>{favorite.title}</h2>
          <img src={`http://localhost:8000${favorite.src}`} alt={favorite.title} />
          <p>{favorite.author}</p>
        </AllResults>
      ))}
    </AppContainer>
  );
}

export default Favoritos;
