import Button from "../Button";
import { Title } from "../Title";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 50%;
  padding: 20px;
  gap: 20px;

  img{
    width: 80%;
    border-radius: 10px;
    }
`

const Subtitle = styled.h4`
   color: #002F52;
   font-size: 18px;
   font-weight: bold;
   margin: 15px 0;
`


function CardRecommend({title, subtitle, description, img}) {
  return (
    <Card>
        <div>
            <Title
                fontSize="1.5rem"
                color="#EB9B00"

            >{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <p>{description}</p>
        </div>
        <div>
            <img src={img} alt={title} />
            <Button>Saiba Mais</Button>
        </div>
    </Card>
  );
}

export default CardRecommend;