import styled, {css} from 'styled-components';

export interface Props {
  images: string[];
}

const arrowStyles = {
  right: css`
    right: -3px;
  `,
  left: css`
    left: -3px;
  `,
};

export const CarouselCircleContainer = styled.div`
  display: inline-block;

  margin: 0 1rem;
`;

export const ArrowButtonContainer = styled.span<{variant: 'right' | 'left'}>`
  position: absolute;
  top: 48%;
  ${({variant}) => arrowStyles[variant]};

  will-change: transform;
  transform: translateY(-50%);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;

  position: relative;

  border: 3px solid ${({theme}) => theme.colors.black};
`;

export const CarouselNavigation = styled.div`
  position: absolute;
  left: 50%;
  margin-top: 2rem;
  padding: 0 1em;

  display: flex;
  flex-direction: row;
  align-items: center;

  will-change: transform;
  transform: translateX(-50%);
`;

export const StyledCarousel = styled.div`
  width: 540px;
  height: 320px;

  padding: 0;
`;
