import {FC} from 'react';

import {SquaredButton, SquaredButtonProps} from './social-media-button.styles';
import {MainTheme} from '../../../theme';
import {
  FacebookIcon,
  IconProps,
  InstagramIcon,
  TwitterIcon,
} from '../../atoms/icon';

interface IconButtonProps extends SquaredButtonProps {
  color?: keyof MainTheme['colors'];
  inverted?: boolean;
  href: string;
}

const SocialMediaButton =
  (Icon: FC<IconProps>) =>
  ({color, inverted, ...buttonProps}: IconButtonProps) => {
    return (
      <SquaredButton
        color={inverted ? 'backgroundDarker' : 'black'}
        target="_blank"
        rel="noopener noreferrer"
        {...buttonProps}
      >
        <Icon color={inverted ? 'black' : 'backgroundDarker'} />
      </SquaredButton>
    );
  };

export const FacebookButton = SocialMediaButton(FacebookIcon);
export const InstagramButton = SocialMediaButton(InstagramIcon);
export const TwitterButton = SocialMediaButton(TwitterIcon);
