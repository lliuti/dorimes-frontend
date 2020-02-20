import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ChefImage = styled.img`
  width: 480px;
`;

export const IntroductionTitle = styled.h1`
  color: #666;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const IntroductionText = styled.p`
  color: #666;
  font-size: 26px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;