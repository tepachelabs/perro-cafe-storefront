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
    <StyledCarousel
      role="group"
      aria-roledescription="carousel"
      aria-label="Imágenes y productos"
      aria-live="polite"
    >
      {children.map((child, index, arr) => (
        <ImageContainer
          // eslint-disable-next-line react/no-array-index-key
          key={`Image ${index}`}
          role="group"
          aria-current={index === selectedIndex}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${arr.length}`}
        >
          {child}
        </ImageContainer>
      ))}
      <ArrowButtonContainer variant="left">
        <LeftArrow onClick={previousImage} title="Contenido previo" />
      </ArrowButtonContainer>
      <ArrowButtonContainer variant="right">
        <RightArrow onClick={nextImage} title="Contenido siguiente" />
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
