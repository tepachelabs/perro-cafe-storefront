import banner from './img/regular-clients-banner.svg';
import {
  Description,
  PrimaryContainer,
  RegularsHeroBanner,
  RegularsHeroContainer,
  RegularsTitle,
  SecondaryContainer,
} from './regulars-hero.styles';
import configData from '../../../config.json';

export const RegularsHero = () => (
  <RegularsHeroContainer>
    <PrimaryContainer>
      <RegularsTitle>{configData.regularsHero.title}</RegularsTitle>
      <Description bold>{configData.regularsHero.description}</Description>
    </PrimaryContainer>
    <SecondaryContainer>
      <RegularsHeroBanner src={banner} alt="Fondo de cabecera" />
    </SecondaryContainer>
  </RegularsHeroContainer>
);
