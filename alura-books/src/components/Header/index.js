import Logo from '../Logo';
import MenuHeader from '../MenuHeader';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 0.5rem;
`

function Header() {
  return (
      <HeaderContainer>
        <Logo/>
        <MenuHeader/>
        <IconsHeader/>
      </HeaderContainer>
  );
}

export default Header;