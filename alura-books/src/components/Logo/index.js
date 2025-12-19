import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.6rem;
  align-items: center;
`

const LogoImage = styled.img`
    height: 80%;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;
