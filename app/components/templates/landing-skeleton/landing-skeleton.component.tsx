import {FC} from 'react';

import {Block, Container, Main, Title} from './landing-skeleton.styles';

export const LandingSkeleton: FC = () => {
  return (
    <Main>
      {/* HERO */}
      <Container>
        <Block h="40vh" mh="300px">
          <Title>Cafeteria Indie Experimental</Title>
        </Block>
        <Block h="30vh" mh="300px" />
      </Container>

      {/* MENU */}
      <Container>
        <Block h="40vh" mh="300px">
          <Title>El Menu</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <b>Consectetur adipiscing elit.</b>
          </p>
          <button>ver menú</button>
        </Block>
        <Block h="40vh" mh="300px">
          <p>Featured images (gallery / carousel)</p>
        </Block>
      </Container>

      {/* THE PLACE */}
      <Container gridTemplateColumns={['1fr', '1fr 1fr']}>
        <Block gridColumn={['span 1', 'span 2']}>
          <Title>El Culto</Title>
        </Block>

        <Block h="40vh" mh="200px">
          <p>Gallery</p>
        </Block>

        <Block h="40vh" mh="200px">
          <p>Icons</p>
        </Block>
      </Container>

      {/* THE TEMPLE */}
      <Container gridTemplateColumns={['1fr', '1fr 2fr']}>
        <Block h="40vh" mh="200px">
          <Title>El Templo</Title>
          <p>Dirección</p>
          <p>Horario</p>
          <button>Como llegar</button>
        </Block>

        <Block h="40vh" mh="200px">
          <p>Map</p>
        </Block>
      </Container>

      {/* COMUNITY */}
      <Container gridTemplateColumns={['1fr', '1fr']}>
        <Block>
          <Title>Comunidad</Title>
        </Block>

        <Container
          gridTemplateColumns={['1fr', '1fr 1fr 1fr']}
          gridGap={['10px', '20px']}
        >
          <Block h="200px">
            <p>Review 1</p>
          </Block>
          <Block h="200px">
            <p>Review 2</p>
          </Block>
          <Block h="200px">
            <p>Review 3</p>
          </Block>
        </Container>
      </Container>
    </Main>
  );
};
