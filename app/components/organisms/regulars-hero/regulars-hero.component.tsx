import {FC} from 'react';

import banner from './img/regular-clients-banner.svg';
import {
  Description,
  PrimaryContainer,
  RegularsHeroBanner,
  RegularsHeroContainer,
  RegularsTitle,
  SecondaryContainer,
} from './regulars-hero.styles';

interface Subtitle {
  value: string;
}

interface Props {
  title: string;
  subtitle?: Subtitle;
  imgSrc?: string;
}

export const RegularsHero: FC<Props> = ({title, subtitle, imgSrc}) => (
  <RegularsHeroContainer>
    <PrimaryContainer>
      <RegularsTitle>{title}</RegularsTitle>
      {subtitle && <Description bold>{subtitle.value}</Description>}
    </PrimaryContainer>
    <SecondaryContainer>
      <RegularsHeroBanner src={imgSrc || banner} alt="Fondo de cabecera" />
    </SecondaryContainer>
  </RegularsHeroContainer>
);
