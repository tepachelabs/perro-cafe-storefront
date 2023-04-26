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
} from '../../../components/atoms/social-media-buttons';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';

export const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <HeroContainer>
      <PrimaryContainer>
        <HeadingImg src={Heading} alt="Título: Cafetería Indie Experimental" />
        <TextContainer>
          <Paragraph bold>Lorem ipsum dolor sit.</Paragraph>
        </TextContainer>
        <SocialMediaButtonsContainer>
          <InstagramButton
            isDarkBackground
            href={configData.socialMedia.instagram}
          />
          <FacebookButton
            isDarkBackground
            href={configData.socialMedia.facebook}
          />
          <TwitterButton
            isDarkBackground
            href={configData.socialMedia.twitter}
          />
        </SocialMediaButtonsContainer>
        <CandleImg src={Candle} alt="Gráfico de una vela" />
      </PrimaryContainer>
      <SecondaryContainer>
        {isDesktop && (
          <SeeMenuButtonContainer>
            <SeeMenuButton
              variant="primary"
              href={configData.globalLinks.menu}
            />
          </SeeMenuButtonContainer>
        )}
        <HeroBannerImg src={HeroBanner} alt="Fondo de cabecera" />
      </SecondaryContainer>
    </HeroContainer>
  );
};
