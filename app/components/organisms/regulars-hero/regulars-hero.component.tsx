import {Image} from '@shopify/hydrogen/storefront-api-types';
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

interface Subtitle {
  value: string;
}

interface Props {
  title?: string;
  subtitle?: Subtitle;
  imgSrc?: Image;
}

export const RegularsHero: FC<Props> = ({title, subtitle, imgSrc}) => (
  <RegularsHeroContainer>
    <PrimaryContainer>
      <RegularsTitle>{title || 'Página no encontrada'}</RegularsTitle>
      {!title && (
        <HeroButtonContainer>
          <HorizontalButton label="Volver al inicio" href="/" target="_self" />
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
