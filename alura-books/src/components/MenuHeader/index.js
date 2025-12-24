import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Espaço menor em tablets/celulares */
    display: none; /* Dica: Geralmente em mobile ocultamos o menu e usamos um ícone "hambúrguer" */
  }
`

const OptionMenu = styled.li`
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap; /* Impede o texto de quebrar em duas linhas */

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const optionTexts = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'SOBRE NOS'];

function MenuHeader() {
  return (
    <Menu>
        { optionTexts.map((text) => (
            <Link to={`/${text.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <OptionMenu><p><strong>{text}</strong></p></OptionMenu>
            </Link>
        ) ) }
    </Menu>
  );
}

export default MenuHeader;
