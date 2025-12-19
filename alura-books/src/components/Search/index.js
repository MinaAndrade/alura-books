import Input from '../Input';
import Button from '../Button';
import styled from 'styled-components';
import { useState } from 'react';
import { books } from './searchData';
import { Title } from '../Title';

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 2rem;
        color: #FFFFFF;
        font-weight: 400;
`

const AllResults = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 80px;
`

const Result = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 80px;
    cursor: pointer;  

    &:hover {
        cursor: pointer;
        border: 1px solid #FFFFFF;
        padding: 20px;
        border-radius: 15px;
    }

    p {
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 500;
    }

    img {
        width: 150px;
        height: auto;
    }
`   

function Search() {
    const [searchValue, setSearchValue] = useState([]);

    return (
        <SearchContainer>
            <Title>Já sabe o livro que está procurando?</Title>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
            placeholder="Escreva sua próxima leitura"
            onChange={ event => {
                const textFilled = event.target.value.trim().toLowerCase();

                
                if (!textFilled) {
                    setSearchValue([]);
                    return;
                }

                const result = books.filter( book => book.name.toLowerCase().includes(textFilled) );
                setSearchValue(result);

            }}
            />
            <AllResults>
                { searchValue.map( book => (
                    <Result key={book.id}>
                        <p>{book.name}</p>
                        <img src={book.src} alt={book.name}/>
                    </Result>
                )) }
            </AllResults>
        </SearchContainer>
    )
}

export default Search;