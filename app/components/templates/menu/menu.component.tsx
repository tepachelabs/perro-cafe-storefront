import {FC} from 'react';

import {
  Grid,
  MenuContainer,
  PrimaryContainer,
  SecondaryContainer,
  MenuDescription,
} from './menu.styles';
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
    <MenuContainer>
      <PrimaryContainer>
        <Subtitle icon="menu">El Menú</Subtitle>
        <MenuDescription>
          Lorem ipsum dolor sit amet, conctetuer adipiscing elitvolutpat.
          Hendrerit invulputatevelit esse Ut wisi enim ad minimveniam.
        </MenuDescription>
        <MenuDescription bold>
          Molestie consequat, vel illum dolore eu feugiat.
        </MenuDescription>
        <Hr />
        <HorizontalButton
          label="Ver el menú"
          href={configData.globalLinks.menu}
        />
      </PrimaryContainer>
      <SecondaryContainer>
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
      </SecondaryContainer>
    </MenuContainer>
  );
};
