import {FC} from 'react';

import {
  BottomContainer,
  CultContainer,
  PerksGrid,
  TopContainer,
  Description,
  CarouselContainer,
  CultBackground,
} from './cult.styles';
import {PerkInfo} from '../../molecules/perk-info/perk-info.component';
import {TitleSection} from '../../molecules/title-section';
import {Carousel} from '../../organisms/carousel';

interface CarouselImage {
  id: string;
  alt: string;
  src: string;
}

interface Props {
  images: CarouselImage[];
  description: string;
}

export const Cult: FC<Props> = ({images, description}) => (
  <CultBackground>
    <CultContainer>
      <TopContainer>
        <TitleSection icon="cult">El Culto</TitleSection>
        <Description bold>{description}</Description>
      </TopContainer>
      <BottomContainer>
        <CarouselContainer>
          <Carousel>
            {images.map((image) => (
              <img key={image.id} src={image.src} alt={image.alt} />
            ))}
          </Carousel>
        </CarouselContainer>
        <PerksGrid>
          <PerkInfo icon="internet">Internet rápido</PerkInfo>
          <PerkInfo icon="ingredients">Ingredientes 100% naturales</PerkInfo>
          <PerkInfo icon="games">Juegos de mesa</PerkInfo>
          <PerkInfo icon="events">Hosteo de eventos</PerkInfo>
        </PerksGrid>
      </BottomContainer>
    </CultContainer>
  </CultBackground>
);
