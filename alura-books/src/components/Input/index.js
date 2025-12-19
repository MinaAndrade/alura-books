import styled from 'styled-components';

const Input = styled.input`
    order: 1px solid #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    padding: 8px 70px;
    font-size: 1.3rem;
    color: #FFFFFF;
    background: #FFFFFF;
    background-color: transparent;
    text-align: center;
    align-items: center;
    margin: 20px;
    width: 30rem;

    &::placeholder {
        color: #9D9D9D;
        font-size: 1.3rem;
    }
`

export default Input;
