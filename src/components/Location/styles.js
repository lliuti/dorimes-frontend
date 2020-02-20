import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 50px 100px;
  align-items: center;
`;

export const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MapImage = styled.img`
  width: 600px;
`;

export const ContentTitle = styled.h1`
  color: #666;
  font-size: 32px;
`;

export const ContentText = styled.p`
  color: #666;
  font-size: 26px;
  margin-top: 15px;
`;
