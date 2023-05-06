import styled from 'styled-components/native';

export const Card = styled.View`
  boxShadow: 0 4px 8px 0 rgba(0,0,0,0.2),
  transition: 0.3s,
  width: 40%,
  background: red,

  hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Container = styled.View`
  padding: 2px 16px
`;