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

export const Hero = () => {
  return (
    <HeroContainer>
      <PrimaryContainer>
        <HeadingImg src={Heading} alt="Heading" />
        <TextContainer>
          <Paragraph bold>Lorem ipsum dolor sit.</Paragraph>
        </TextContainer>
        <SocialMediaButtonsContainer>
          <InstagramButton
            isDarkBackground
            href="https://www.instagram.com/cultoperrocafe"
          />
          <FacebookButton
            isDarkBackground
            href="https://www.facebook.com/cultoperrocafe"
          />
          <TwitterButton
            isDarkBackground
            href="https://twitter.com/cultoperrocafe"
          />
        </SocialMediaButtonsContainer>
        <CandleImg src={Candle} alt="Candle" />
      </PrimaryContainer>
      <SecondaryContainer>
        <SeeMenuButtonContainer>
          <SeeMenuButton
            variant="primary"
            href="https://www.instagram.com/cultoperrocafe"
          />
        </SeeMenuButtonContainer>
        <HeroBannerImg src={HeroBanner} alt="Heading" />
      </SecondaryContainer>
    </HeroContainer>
  );
};
