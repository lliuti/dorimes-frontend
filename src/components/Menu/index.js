import React from 'react';

import Carbonara from '../../assets/carbonara.jpg';

import { 
  Container,
  SectionTitle,
  SectionDescription,
  CardGroup,
  Card,
  CardHeader,
  RecipeTitle,
  CardBody,
  RecipeImage,
  CardFooter,
  RecipePrice
} from './styles';

export default function Menu() {
  return (
    <Container>
      <SectionTitle>Menu</SectionTitle>
      <SectionDescription>Lorem ipsum dolor sit amet.</SectionDescription>
      <CardGroup>
        <Card>
          <CardHeader>
            <RecipeTitle>Carbonara</RecipeTitle>
          </CardHeader>
          <CardBody>
            <RecipeImage src={Carbonara} />
          </CardBody>
          <CardFooter>
            <RecipePrice>$13,56</RecipePrice>
          </CardFooter>
        </Card>
        <Card></Card>
        <Card></Card>
      </CardGroup>
    </Container>
  );
}
