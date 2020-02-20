import React from 'react';

import Map from '../../assets/undraw_map.svg';

import { 
  Container,
  LocationGrid,
  Content,
  MapImage,
  ContentTitle,
  ContentText,
} from './styles';

export default function Location() {
  return (
    <Container>
      <LocationGrid>
        <Content>
          <ContentTitle>How to get here?</ContentTitle>
          <ContentText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus numquam enim facilis, quod nulla asperiores nostrum.</ContentText>
        </Content>
        <MapImage src={Map}/>
      </LocationGrid>
    </Container>
  );
}
