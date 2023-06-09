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
import {Link, LinkRender} from '../../atoms/link';

const {
  globalLinks: {menu},
} = configData;

interface PromotionCardProps {
  image: string;
  isRecommended?: boolean;
  isSeasonal?: boolean;
  label: string;
  storeUrl?: string;
  linkRender: LinkRender;
}

export const PromotionCard: FC<PromotionCardProps & CardProps> = ({
  image,
  isRecommended,
  isSeasonal,
  label,
  storeUrl,
  fullWidth = false,
  borderless = false,
  linkRender: _Link,
}) => {
  const showBadge = isRecommended || isSeasonal;

  return (
    <Card fullWidth={fullWidth} borderless={borderless}>
      <Link to={storeUrl || menu} linkRender={_Link}>
        {showBadge && (
          <BadgeContainer>
            <Badge variant={isRecommended ? 'recommendation' : 'seasonal'} />
          </BadgeContainer>
        )}
        <Img src={image} alt={label} />
        <Title>{label}</Title>
      </Link>
    </Card>
  );
};
