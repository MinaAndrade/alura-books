import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;   /* Impede o logo de amassar em telas pequenas */
  font-size: 1.6rem;
`

const LogoImage = styled.img`
    height: 2.5rem;
    width: auto;
    max-width: 100%;    /* Garante que ela nunca seja maior que o container */
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
