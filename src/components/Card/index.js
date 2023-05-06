import { View } from 'react-native';
import { Card as CardStyle, Container } from './styles'

export default function Card({ nome, preco }) {
  return (
    <View>
      <CardStyle>
        <Container>
          <h4><b>John Doe</b></h4> 
          <p>Architect & Engineer</p> 
        </Container>
      </CardStyle>
    </View>
  );
}
