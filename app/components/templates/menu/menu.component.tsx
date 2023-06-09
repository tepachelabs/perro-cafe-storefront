import {FC} from 'react';

import {
  Grid,
  PrimaryContainer,
  MenuDescription,
  CarouselContainer,
} from './menu.styles';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {Hr} from '../../atoms/hr';
import {LinkRender} from '../../atoms/link';
import {Section} from '../../atoms/section';
import {PromotionCard} from '../../molecules/promotion-card';
import {Subtitle} from '../../molecules/subtitle';
import {Carousel} from '../../organisms/carousel';

interface Props {
  products: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  linkRender: LinkRender;
}

export const Menu: FC<Props> = ({products, linkRender: _Link}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Section>
      <PrimaryContainer>
        <Subtitle icon="menu">El Menú</Subtitle>
        <MenuDescription>
          Descubre nuestro toque casero, con ingredientes de la más alta
          calidad, seleccionados cuidadosamente para ti.
        </MenuDescription>
        <MenuDescription bold>
          Nuestro café es tostado por nosotros en Hermosillo.
        </MenuDescription>
        <Hr />
        <HorizontalButton
          label="Ver el menú"
          href={configData.globalLinks.menu}
          linkRender={_Link}
        />
      </PrimaryContainer>
      {isDesktop ? (
        <Grid>
          {products.map((product) => (
            <PromotionCard
              key={product.alt}
              image={product.src}
              label={product.alt}
            />
          ))}
        </Grid>
      ) : (
        <CarouselContainer>
          <Carousel>
            {products.map((product) => (
              <PromotionCard
                key={product.alt}
                image={product.src}
                label={product.alt}
                borderless
                fullWidth
              />
            ))}
          </Carousel>
        </CarouselContainer>
      )}
    </Section>
  );
};
