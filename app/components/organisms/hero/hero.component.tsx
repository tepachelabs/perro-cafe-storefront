import {
  HeroContainer,
  TextContainer,
  PrimaryContainer,
  SecondaryContainer,
  HeadingImg,
  HeroBannerImg,
  SocialMediaButtonsContainer,
  SeeMenuButtonContainer,
  CandleImg,
} from './hero.styles';
import Candle from './img/Candle.svg';
import Heading from './img/Heading.svg';
import HeroBanner from './img/HeroBanner.svg';
import {Paragraph} from '../../../components/atoms/paragraph';
import {SeeMenuButton} from '../../../components/atoms/see-menu-button';
import {
  InstagramButton,
  FacebookButton,
  TwitterButton,
} from '../../../components/molecules/social-media-buttons';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';

const {heroSubtitle, socialMedia, globalLinks} = configData;

export const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <HeroContainer>
      <PrimaryContainer>
        <HeadingImg src={Heading} alt="Título: Cafetería Indie Experimental" />
        <TextContainer>
          <Paragraph bold>{heroSubtitle}</Paragraph>
        </TextContainer>
        <SocialMediaButtonsContainer>
          <InstagramButton href={socialMedia.instagram} />
          <FacebookButton href={socialMedia.facebook} />
          <TwitterButton href={socialMedia.twitter} />
        </SocialMediaButtonsContainer>
        <CandleImg src={Candle} alt="Gráfico de una vela" />
      </PrimaryContainer>
      <SecondaryContainer>
        {isDesktop && (
          <SeeMenuButtonContainer>
            <SeeMenuButton href={globalLinks.menu} />
          </SeeMenuButtonContainer>
        )}
        <HeroBannerImg src={HeroBanner} alt="Fondo de cabecera" />
      </SecondaryContainer>
    </HeroContainer>
  );
};
