import styled from 'styled-components';

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
`

const OptionMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
`

const optionTexts = ['HOME', 'CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'SOBRE NÓS'];

function MenuHeader() {
  return (
    <Menu>
        { optionTexts.map((text) => (
            <OptionMenu><p><strong>{text}</strong></p></OptionMenu>
        ) ) }
    </Menu>
  );
}

export default MenuHeader;
