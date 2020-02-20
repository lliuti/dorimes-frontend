import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  padding: 80px 100px;
`;

export const SectionTitle = styled.h1`
  color: #666;
  font-size: 32px;
`;
export const SectionDescription = styled.p`
  color: #666;
  font-size: 26px;
  margin-top: 15px;  
`;

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  grid-gap: 50px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background: #F3486D;
  border-radius: 20px 20px 0 0;
`;

export const RecipeTitle = styled.h1`
  font-size: 22px;
  color: #fff;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const RecipeImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F3486D;
  padding: 20px 0;
  border-radius: 0px 0px 20px 20px;
`;

export const RecipePrice = styled.span`
  color: #fff;
  font-size: 22px;
`;