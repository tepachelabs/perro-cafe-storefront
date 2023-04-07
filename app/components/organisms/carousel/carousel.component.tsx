import {FC, ReactNode, useState} from 'react';

import {
  ArrowButtonContainer,
  CarouselCircleContainer,
  CarouselNavigation,
  ImageContainer,
  StyledCarousel,
} from './carousel.styles';
import {ArrowButton} from '../../atoms/arrow-button';
import {CarouselCircle} from '../../atoms/carousel-circle';

interface Props {
  children: ReactNode[];
  showDots?: boolean;
}

export const Carousel: FC<Props> = ({children, showDots = false}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === children.length - 1) return 0;

      return prevIndex + 1;
    });
  };

  const previousImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === 0) return children.length - 1;

      return prevIndex - 1;
    });
  };

  return (
    <StyledCarousel>
      {children.map((child, index) => (
        <ImageContainer
          key={child!.toString()}
          aria-selected={index === selectedIndex}
        >
          {child}
        </ImageContainer>
      ))}
      <ArrowButtonContainer variant="left">
        <ArrowButton variant="left" onClick={previousImage} />
      </ArrowButtonContainer>
      <ArrowButtonContainer variant="right">
        <ArrowButton variant="right" onClick={nextImage} />
      </ArrowButtonContainer>
      {showDots && (
        <CarouselNavigation>
          {children.map((child, index) => (
            <CarouselCircleContainer key={child!.toString()}>
              <CarouselCircle active={index === selectedIndex} />
            </CarouselCircleContainer>
          ))}
        </CarouselNavigation>
      )}
    </StyledCarousel>
  );
};
