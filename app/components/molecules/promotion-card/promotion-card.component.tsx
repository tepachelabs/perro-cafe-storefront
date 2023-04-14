import {FC} from 'react';

import {
  BadgeContainer,
  Img,
  Title,
  Card,
  CardProps,
} from './promotion-card.styles';
import {Badge} from '../../atoms/badge';

interface PromotionCardProps {
  image: string;
  isRecommended?: boolean;
  isSeasonal?: boolean;
  label: string;
}

export const PromotionCard: FC<PromotionCardProps & CardProps> = ({
  image,
  isRecommended,
  isSeasonal,
  label,
  fullWidth = false,
  borderless = false,
}) => {
  const showBadge = isRecommended || isSeasonal;

  return (
    <Card fullWidth={fullWidth} borderless={borderless}>
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
