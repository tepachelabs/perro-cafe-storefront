import {FC} from 'react';

import {
  BottomContainer,
  CultSection,
  PerksGrid,
  TopContainer,
  Description,
  CarouselContainer,
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
}

export const Cult: FC<Props> = ({images}) => (
  <CultSection>
    <TopContainer>
      <TitleSection icon="cult">El Culto</TitleSection>
      <Description bold>
        Lorem ipsum dolor sit amet, conctetuer adipiscing elit volutpat.
        Hendrerit in vulputate velit esse. Ut wisi enim ad minim veniam.
      </Description>
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
  </CultSection>
);
