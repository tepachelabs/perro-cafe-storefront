import {FC} from 'react';

import facebookDark from './img/facebook-dark.svg';
import facebook from './img/facebook.svg';
import instagramDark from './img/instagram-dark.svg';
import instagram from './img/instagram.svg';
import twitterDark from './img/twitter-dark.svg';
import twitter from './img/twitter.svg';
import {
  Icon,
  StyledButton,
  Container,
  StyledButtonProps,
} from './social-media-button.styles';

type Button = FC<StyledButtonProps>;

export const InstagramButton: Button = ({isDarkBackground, href}) => (
  <Container>
    <a href={href} target="_blank" rel="noreferrer">
      <StyledButton isDarkBackground={isDarkBackground} href={href}>
        <Icon src={isDarkBackground ? instagram : instagramDark} />
      </StyledButton>
    </a>
  </Container>
);

export const FacebookButton: Button = ({isDarkBackground, href}) => (
  <Container>
    <a href={href} target="_blank" rel="noreferrer">
      <StyledButton isDarkBackground={isDarkBackground} href={href}>
        <Icon src={isDarkBackground ? facebook : facebookDark} />
      </StyledButton>
    </a>
  </Container>
);

export const TwitterButton: Button = ({isDarkBackground, href}) => (
  <Container>
    <a href={href} target="_blank" rel="noreferrer">
      <StyledButton isDarkBackground={isDarkBackground} href={href}>
        <Icon src={isDarkBackground ? twitter : twitterDark} />
      </StyledButton>
    </a>
  </Container>
);
