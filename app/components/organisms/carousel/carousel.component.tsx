import {FC, ReactNode, useState} from 'react';

import {
  ArrowButtonContainer,
  CarouselCircleContainer,
  CarouselNavigation,
  ImageContainer,
  StyledCarousel,
} from './carousel.styles';
import {LeftArrow, RightArrow} from '../../atoms/arrow-button';
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
          // eslint-disable-next-line react/no-array-index-key
          key={`Image ${index}`}
          aria-selected={index === selectedIndex}
        >
          {child}
        </ImageContainer>
      ))}
      <ArrowButtonContainer variant="left">
        <LeftArrow onClick={previousImage} title="left arrow" />
      </ArrowButtonContainer>
      <ArrowButtonContainer variant="right">
        <RightArrow onClick={nextImage} title="right arrow" />
      </ArrowButtonContainer>
      {showDots && (
        <CarouselNavigation>
          {children.map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselCircleContainer key={`Dot ${index}`}>
              <CarouselCircle active={index === selectedIndex} />
            </CarouselCircleContainer>
          ))}
        </CarouselNavigation>
      )}
    </StyledCarousel>
  );
};
