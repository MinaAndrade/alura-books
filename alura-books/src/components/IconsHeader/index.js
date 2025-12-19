import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const iconImages = [perfil, sacola];

const IconsContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconItem = styled.li`
    display: flex;
    width: 1.6rem;
    justify-content: center;
    cursor: pointer;
`;

function IconsHeader() {
    return (
        <IconsContainer>
          { iconImages.map((image) => (
            <IconItem>
              <img 
                src={image} 
                className='icon-img' 
                alt='icon'/>
            </IconItem>
          )) }
        </IconsContainer>
    );
}

export default IconsHeader;
