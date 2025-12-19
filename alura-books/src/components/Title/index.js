import styled from "styled-components";

export const Title = styled.h2`   
    color: ${ props => props.color || '#FFFFFF' };
    font-size: ${ props => props.fontSize || '3rem' };
    text-align: ${ props => props.textAlign || 'center' };
    background-color: ${ props => props.backgroundColor || 'transparent' };
    width: 100%;
    padding: 30px 0;
    box-shadow: ${ props => props.boxShadow || 'none' };
`