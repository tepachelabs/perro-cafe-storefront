import {FC} from 'react';

import {BadgeProps, Highlight, Img, StyledBadge} from './badge.styles';
import recommendationBadge from './img/recommendation-badge.svg';
import seasonalBadge from './img/seasonal-badge.svg';

export const Badge: FC<BadgeProps> = ({variant = 'recommendation'}) => {
  return (
    <StyledBadge>
      <Img src={variant === 'seasonal' ? seasonalBadge : recommendationBadge} />
      {variant === 'recommendation' && <Highlight />}
    </StyledBadge>
  );
};
