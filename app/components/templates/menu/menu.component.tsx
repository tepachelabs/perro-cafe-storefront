import {FC} from 'react';

import {Section} from '~/components/atoms/section';

import {Grid, PrimaryContainer, MenuDescription} from './menu.styles';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {Hr} from '../../atoms/hr';
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
}

export const Menu: FC<Props> = ({products}) => {
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
      )}
    </Section>
  );
};
