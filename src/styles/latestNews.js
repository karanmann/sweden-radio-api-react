import styled from 'styled-components';

export const NewsCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (min-width: 600px) {
    flex-direction: row;
    width: 30%;
  }
`;

export const NewsCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  margin: 2%;
  
  height: 70%;
  align-items: center;
  background: #d5e1ef;
  box-shadow: 17px 17px 33px #aab4bf, -17px -17px 33px #ffffff;
  font-weight: 300;
  font-size: 0.9rem;
/* 
  @media (min-width: 600px) {
    flex-direction: row;
    width: 30%;
  } */

  &:hover {
    box-shadow: inset 17px 17px 33px #aab4bf, -17px -17px 33px #ffffff;
  }

`;

export const NewsCardsImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 20px 20px 0 0;
`;

export const CardDescription = styled.div`
  margin: 1rem;
  white-space: wrap;
`
