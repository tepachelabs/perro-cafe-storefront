import {FC} from 'react';
import {Bullet, CarouselCircleProps} from './CarouselCircle.styles';

export const CarouselCircle: FC<CarouselCircleProps> = ({
  variant = 'normal',
}) => {
  return <Bullet variant={variant} />;
};
