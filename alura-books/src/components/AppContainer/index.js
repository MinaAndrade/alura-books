import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  flex: 1; 
  display: flex;
  flex-direction: ${ props => props.flexDirection || 'column' }; /* Coloca uma seção abaixo da outra */
  
  /* Permite o scroll suave entre as seções */
  overflow-y: auto; 

  scroll-snap-type: y mandatory; /* Ativa o encaixe automático */
  
  background-image: linear-gradient(90deg, #04256d, #326589);
`

export default AppContainer;