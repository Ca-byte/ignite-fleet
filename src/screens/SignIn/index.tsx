import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';
import { Container, Slogan, Title } from './styles';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
    <Title>Ignite Fleet</Title>
    <Slogan>
      Vehicle usage management
    </Slogan>
    <Button title='Sign in with Google' />
  </Container>
  );
}