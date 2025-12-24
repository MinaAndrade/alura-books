import styled from "styled-components"
import { books } from "./latestReleasesData"
import { Title } from "../Title"
import CardRecommend from "../CardRecommend"

const LastestReleasesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  width: 100%;
  min-height: 100%;
  gap: 20px;

  scroll-snap-align: start; 
  flex-shrink: 0; /* Impede que a seção seja esmagada */
`

const NewBooksContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    gap: 50px;
    width: 80%;
`

const NewBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #FFFFFF;

    img {
        width: 6.5rem;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s;
    }

    p {
        font-size: 1.1rem;
        color: #000000;
    }    
`

function LatestReleases() {
    return (
        <LastestReleasesContainer>
            <Title 
                color="#EB9B00"
                backgroundColor="#FFFFFF"
                boxShadow="0 5px 10px rgba(0, 0, 0, 0.5)"
            >Últimos Lançamentos</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <NewBookContainer>
                        <img src={book.src} alt={book.name} />
                        <p><strong>{book.name}</strong></p>
                    </NewBookContainer>
                ))}
            </NewBooksContainer>
            <CardRecommend 
                title="Recomendações para você"
                subtitle="Baseado nos seus últimos livros visualizados"
                description="Descubra novos títulos que combinam com seus interesses e expanda seu conhecimento com nossas recomendações personalizadas."
                img="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
        </LastestReleasesContainer>
    )
}

export default LatestReleases;
