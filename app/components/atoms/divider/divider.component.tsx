import {Container, Img} from './divider.styles';
import graphic from './img/divider-graphic.svg';
import {Hr} from '../hr/hr.component';

export const Divider = () => {
  return (
    <>
      <Container>
        <Hr></Hr>
        <Img src={graphic} />
        <Hr></Hr>
      </Container>
    </>
  );
};
