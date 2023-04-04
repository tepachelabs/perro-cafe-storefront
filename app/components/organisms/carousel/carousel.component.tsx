import {FC, useState} from 'react';

import {
  ArrowButtonContainer,
  CarouselCircleContainer,
  CarouselNavigation,
  ImageContainer,
  Img,
  Props,
  StyledCarousel,
} from './carousel.styles';
import {ArrowButton} from '../../atoms/arrow-button';
import {CarouselCircle} from '../../atoms/carousel-circle';

export const Carousel: FC<Props> = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  const previousImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <StyledCarousel>
      <ImageContainer>
        <ArrowButtonContainer variant="left">
          <ArrowButton variant="left" onClick={previousImage} />
        </ArrowButtonContainer>
        <ArrowButtonContainer variant="right">
          <ArrowButton variant="right" onClick={nextImage} />
        </ArrowButtonContainer>
        <Img src={images[selectedIndex]} />
      </ImageContainer>
      <CarouselNavigation>
        {images.map((img, index) => (
          <CarouselCircleContainer key={img}>
            <CarouselCircle active={index === selectedIndex} />
          </CarouselCircleContainer>
        ))}
      </CarouselNavigation>
    </StyledCarousel>
  );
};
