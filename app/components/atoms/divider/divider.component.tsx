import {Container, Img} from './divider.styles';
import {Hr} from '../hr/hr.component';
import graphic from './img/divider-graphic.svg';

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
