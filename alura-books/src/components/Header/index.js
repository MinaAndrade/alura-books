import Logo from '../Logo';
import MenuHeader from '../MenuHeader';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

function Header() {
  return (
      <HeaderContainer>
        <Link to="/">
          <Logo/>
        </Link>
        <MenuHeader/>
        <IconsHeader/>
      </HeaderContainer>
  );
}

export default Header;