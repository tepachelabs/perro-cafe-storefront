import {Image, Metafield} from '@shopify/hydrogen/storefront-api-types';
import {FC} from 'react';

import banner from './img/regular-clients-banner.svg';
import {
  Description,
  HeroButtonContainer,
  PrimaryContainer,
  RegularsHeroBanner,
  RegularsHeroContainer,
  RegularsTitle,
  SecondaryContainer,
} from './regulars-hero.styles';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {LinkRender} from '../../atoms/link';

export type MetafieldValue = Pick<Metafield, 'value'>;
export type HeroBanner = Pick<Image, 'url'>;

interface Props {
  title?: string;
  subtitle?: MetafieldValue;
  imgSrc?: HeroBanner;
  linkRender: LinkRender;
}

export const RegularsHero: FC<Props> = ({
  title,
  subtitle,
  imgSrc,
  linkRender: _Link,
}) => (
  <RegularsHeroContainer>
    <PrimaryContainer>
      <RegularsTitle>{title || 'Página no encontrada'}</RegularsTitle>
      {!title && (
        <HeroButtonContainer>
          <HorizontalButton
            label="Volver al inicio"
            href="/"
            linkRender={_Link}
          />
        </HeroButtonContainer>
      )}
      {subtitle && <Description bold>{subtitle.value}</Description>}
    </PrimaryContainer>
    <SecondaryContainer>
      <RegularsHeroBanner
        src={imgSrc ? imgSrc.url : banner}
        alt="Fondo de cabecera"
      />
    </SecondaryContainer>
  </RegularsHeroContainer>
);
