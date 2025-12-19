import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  background-color: ${ props => props.backgroundColor || '#326589' };
  color: ${ props => props.color || '#FFFFFF' };
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${ props => props.hoverBackgroundColor || '#255a75' };
  }
`;

export default Button;
