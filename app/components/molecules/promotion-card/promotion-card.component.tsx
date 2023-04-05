import {FC} from 'react';

import {BadgeContainer, Img, Title, Card} from './promotion-card.styles';
import {Badge} from '../../atoms/badge';

interface PromotionCardProps {
  image: string;
  isRecommended?: boolean;
  isSeasonal?: boolean;
  label: string;
}

export const PromotionCard: FC<PromotionCardProps> = ({
  image,
  isRecommended,
  isSeasonal,
  label,
}) => {
  const showBadge = isRecommended || isSeasonal;

  return (
    <Card>
      {showBadge && (
        <BadgeContainer>
          <Badge variant={isRecommended ? 'recommendation' : 'seasonal'} />
        </BadgeContainer>
      )}
      <Img src={image} />
      <Title>{label}</Title>
    </Card>
  );
};
