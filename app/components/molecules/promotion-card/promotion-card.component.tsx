import {FC} from 'react';

import {
  BadgeContainer,
  Img,
  Footer,
  PromotionCardProps,
  StyledPromotionCard,
} from './promotion-card.styles';
import {Badge} from '../../atoms/badge';

export const PromotionCard: FC<PromotionCardProps> = (props) => {
  const {variant = 'default', promoImageUrl, label} = props;

  return (
    <StyledPromotionCard>
      {variant !== 'default' && (
        <BadgeContainer>
          <Badge variant={variant} />
        </BadgeContainer>
      )}
      <Footer>{label}</Footer>
      <Img src={promoImageUrl} />
    </StyledPromotionCard>
  );
};
