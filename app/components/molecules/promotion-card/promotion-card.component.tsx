import {FC} from 'react';

import {
  BadgeContainer,
  Img,
  Title,
  Card,
  CardProps,
} from './promotion-card.styles';
import configData from '../../../config.json';
import {Badge} from '../../atoms/badge';

const {
  globalLinks: {store},
} = configData;

interface PromotionCardProps {
  image: string;
  isRecommended?: boolean;
  isSeasonal?: boolean;
  label: string;
  storeUrl?: string;
}

export const PromotionCard: FC<PromotionCardProps & CardProps> = ({
  image,
  isRecommended,
  isSeasonal,
  label,
  storeUrl,
  fullWidth = false,
  borderless = false,
}) => {
  const showBadge = isRecommended || isSeasonal;

  return (
    <Card
      fullWidth={fullWidth}
      borderless={borderless}
      href={storeUrl}
      target="_blank"
    >
      {showBadge && (
        <BadgeContainer>
          <Badge variant={isRecommended ? 'recommendation' : 'seasonal'} />
        </BadgeContainer>
      )}
      <Img src={image} alt={label} />
      <Title>{label}</Title>
    </Card>
  );
};
