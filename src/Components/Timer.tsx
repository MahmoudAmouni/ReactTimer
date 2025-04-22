import Container from './UI/Container';
import { Timer as TProps } from './store/timer-context';
export default function Timer({name,duration}:TProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
