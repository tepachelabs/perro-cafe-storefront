import {FC} from 'react';

import {
  SocialMediaButtonProps,
  StyledButton,
  Icon
} from './socialMediaButton.styles';

import InstagramIcon from './img/instagram.svg';
import FacebookIcon from './img/facebook.svg';
import TwitterIcon from './img/twitter.svg';

const buttonConfig = {
  "instagram": {
    "url": "https://www.instagram.com/cultoperrocafe/",
    "svgFile": {InstagramIcon},
  },
  "facebook": {
    "url": "https://www.facebook.com/cultoperrocafe",
    "svgFile": {FacebookIcon},
  },
  "twitter": {
    "url": "https://twitter.com/cultoperrocafe",
    "svgFile": {TwitterIcon},
  }
  
}
const iconProps = buttonConfig['instagram'];

export const Button: FC<SocialMediaButtonProps> = ({socialMediaIcon, ...props}) => {
 
  return (
    <>
    <StyledButton {...props}>
        <a href={iconProps['url']}>
          <Icon></Icon>
        </a>
    </StyledButton>
    </>
)
};
