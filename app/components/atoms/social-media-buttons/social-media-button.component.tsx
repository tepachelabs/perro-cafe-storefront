import React, {FC} from 'react';

import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';

import {
  StyledButton,
  SocialMediaButtonProps,
} from './social-media-button.styles';

export const SocialMediaButton: FC<SocialMediaButtonProps> = ({icon}) => {

    let iconSrc;
  switch (icon) {
    case 'instagram':
      iconSrc = instagram;
      break;
    case 'facebook':
      iconSrc = facebook;
      break;
    case 'twitter':
      iconSrc = twitter;
      break;
  }

  return (
    <StyledButton>
    <img src={iconSrc}/>
    </StyledButton>
  );
};
