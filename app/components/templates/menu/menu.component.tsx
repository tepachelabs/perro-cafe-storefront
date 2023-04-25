import {FC} from 'react';

import {
  ButtonContainer,
  Grid,
  MenuContainer,
  PrimaryContainer,
  SecondaryContainer,
  TextContainer,
} from './menu.styles';
import configData from '../../../config/config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {Hr} from '../../atoms/hr';
import {Paragraph} from '../../atoms/paragraph';
import {PromotionCard} from '../../molecules/promotion-card';
import {TitleSection} from '../../molecules/title-section';
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
        <TitleSection icon="menu">El Menú</TitleSection>
        <TextContainer>
          <Paragraph lineHeight="30px">
            Lorem ipsum dolor sit amet, conctetuer adipiscing elitvolutpat.
            Hendrerit invulputatevelit esse Ut wisi enim ad minimveniam.
          </Paragraph>
          <br />
          <Paragraph bold lineHeight="30px">
            Molestie consequat, vel illum dolore eu feugiat.
          </Paragraph>
        </TextContainer>
        <Hr />
        <ButtonContainer>
          <HorizontalButton
            label="Ver el menú"
            href={configData.globalLinks.menu}
          />
        </ButtonContainer>
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
