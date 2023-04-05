import {FC} from 'react';

import {Block, Container, Img, Main, Title} from './landing-skeleton.styles';
import {Paragraph} from '../../atoms/paragraph/paragraph.component';
import {PerkInfo} from '../../molecules/perk-info/perk-info.component';

interface Props {
  images: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

export const LandingSkeleton: FC<Props> = ({images}) => {
  return (
    <Main>
      {/* HERO */}
      <Container>
        <Block h="30vh" mh="300px">
          <Title>Cafeteria Indie Experimental</Title>
        </Block>
        <Block mh="300px" />
      </Container>

      {/* MENU */}
      <Container>
        <Block mh="300px">
          <Title>El Menu</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <b>Consectetur adipiscing elit.</b>
          </p>
          <button>ver menú</button>
        </Block>
        <Container gridTemplateColumns={['1fr 1fr', '1fr 1fr']}>
          {images.map((image) => (
            <Block key={image.alt}>
              <Img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
              <h3>{image.alt}</h3>
            </Block>
          ))}
        </Container>
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
          <Container gridTemplateColumns={['1fr 1fr', '1fr 1fr']}>
            <Block>
              <PerkInfo icon="internet">
                <Paragraph bold>BLASTING FAST INTERNET!</Paragraph>
              </PerkInfo>
            </Block>
            <Block>
              <PerkInfo icon="games">
                <Paragraph bold>Jueguitos de mesa!!</Paragraph>
              </PerkInfo>
            </Block>
            <Block>
              <PerkInfo icon="ingredients">
                <Paragraph bold>Ingredientes frrrrreskibon</Paragraph>
              </PerkInfo>
            </Block>
            <Block>
              <PerkInfo icon="events">
                <Paragraph bold>Fiesta fiesta, eventazos siempre</Paragraph>
              </PerkInfo>
            </Block>
          </Container>
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
