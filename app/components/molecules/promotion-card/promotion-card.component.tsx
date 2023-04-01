import {FC} from 'react';

import {
  BadgeContainer,
  Img,
  PromotionCardFooter,
  PromotionCardProps,
  StyledPromotionCard,
} from './promotion-card.styles';
import {Badge} from '../../atoms/badge';

export const PromotionCard: FC<PromotionCardProps> = ({
  variant = 'default',
  bgImage,
  label,
}) => {
  return (
    <StyledPromotionCard>
      {variant !== 'default' && (
        <BadgeContainer>
          <Badge variant={variant} />
        </BadgeContainer>
      )}
      <PromotionCardFooter>{label}</PromotionCardFooter>
      <Img src={bgImage} />
    </StyledPromotionCard>
  );
};
