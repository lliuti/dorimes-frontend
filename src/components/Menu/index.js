import React from 'react';

import Carbonara from '../../assets/carbonara.jpg';
import Pizza from '../../assets/pizza.jpg';
import Spaghetti from '../../assets/spaghetti.png';

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
            <RecipePrice>$ 13,56</RecipePrice>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <RecipeTitle>Pizza Top</RecipeTitle>
          </CardHeader>
          <CardBody>
            <RecipeImage src={Pizza} />
          </CardBody>
          <CardFooter>
            <RecipePrice>$ 8,50</RecipePrice>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <RecipeTitle>Spaghetti</RecipeTitle>
          </CardHeader>
          <CardBody>
            <RecipeImage src={Spaghetti} />
          </CardBody>
          <CardFooter>
            <RecipePrice>$ 12,56</RecipePrice>
          </CardFooter>
        </Card>
      </CardGroup>
    </Container>
  );
}
