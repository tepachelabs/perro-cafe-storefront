import {FC} from 'react';

import facebookDark from './img/facebook-dark.svg';
import facebook from './img/facebook.svg';
import instagramDark from './img/instagram-dark.svg';
import instagram from './img/instagram.svg';
import twitterDark from './img/twitter-dark.svg';
import twitter from './img/twitter.svg';
import {Icon, StyledButton, Container} from './social-media-button.styles';

interface Props {
  dark?: boolean;
}

export const InstagramButton: FC<Props> = ({dark = false}) => {
  return (
    <Container>
      <a
        href="https://www.instagram.com/cultoperrocafe/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={dark}>
          <Icon src={dark ? instagramDark : instagram} />
        </StyledButton>
      </a>
    </Container>
  );
};

export const FacebookButton: FC<Props> = ({dark = false}) => {
  return (
    <Container>
      <a
        href="https://www.facebook.com/cultoperrocafe"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={dark}>
          <Icon src={dark ? facebookDark : facebook} />
        </StyledButton>
      </a>
    </Container>
  );
};

export const TwitterButton: FC<Props> = ({dark = false}) => {
  return (
    <Container>
      <a
        href="https://twitter.com/cultoperrocafe"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={dark}>
          <Icon src={dark ? twitterDark : twitter} />
        </StyledButton>
      </a>
    </Container>
  );
};
