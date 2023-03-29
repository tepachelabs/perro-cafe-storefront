import {FC} from 'react';
import {Bullet, CarouselCircleProps} from './CarouselCircle.styles';

export const CarouselCircle: FC<CarouselCircleProps> = ({active = false}) => {
  return <Bullet active={active} />;
};
