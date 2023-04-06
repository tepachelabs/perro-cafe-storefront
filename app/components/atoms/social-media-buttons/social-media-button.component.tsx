import {FC} from 'react';

import facebookDark from './img/facebook-dark.svg';
import facebook from './img/facebook.svg';
import instagramDark from './img/instagram-dark.svg';
import instagram from './img/instagram.svg';
import twitterDark from './img/twitter-dark.svg';
import twitter from './img/twitter.svg';
import {Icon, StyledButton, Container} from './social-media-button.styles';

export default interface Props {
  dark?: boolean;
}

export const InstagramButton: FC<Props> = (Props) => {
  return (
    <Container>
      <a
        href="https://www.instagram.com/cultoperrocafe/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={Props.dark}>
          <Icon src={Props.dark ? instagramDark : instagram} />
        </StyledButton>
      </a>
    </Container>
  );
};

export const FacebookButton: FC<Props> = (Props) => {
  return (
    <Container>
      <a
        href="https://www.facebook.com/cultoperrocafe"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={Props.dark}>
          <Icon src={Props.dark ? facebookDark : facebook} />
        </StyledButton>
      </a>
    </Container>
  );
};

export const TwitterButton: FC<Props> = (Props) => {
  return (
    <Container>
      <a
        href="https://twitter.com/cultoperrocafe"
        target="_blank"
        rel="noreferrer"
      >
        <StyledButton dark={Props.dark}>
          <Icon src={Props.dark ? twitterDark : twitter} />
        </StyledButton>
      </a>
    </Container>
  );
};
