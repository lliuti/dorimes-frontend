import React from 'react';

import Chef from '../../assets/undraw_Chef_cu0r.svg';

import { 
  Container,
  TopGrid,
  ChefImage,
  IntroductionTitle,
  IntroductionText,
  ImageContainer,
  IntroContainer
} from './styles';

export default function Home() {
  return (
    <Container>
      <TopGrid>
        <ImageContainer>
          <ChefImage src={Chef}/>
        </ImageContainer>
        <IntroContainer>
          <IntroductionTitle>Welcome to Dorimes!</IntroductionTitle>
          <IntroductionText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deleniti a temporibus aliquid! Deleniti, libero. Modi, repellendus quidem, et quaerat eius excepturi nesciunt aut expedita, iste ipsa recusandae dolorem debitis?
          </IntroductionText>
        </IntroContainer>
      </TopGrid>
    </Container>
  );
}
