import styled, {css} from 'styled-components';

export type ArrowContainerVariants = 'right' | 'left';

const arrowStyles = {
  right: css`
    right: 0;
  `,
  left: css`
    left: 0;
  `,
};

export const CarouselCircleContainer = styled.div`
  display: inline-block;

  margin: 0 1rem;
`;

export const ArrowButtonContainer = styled.span<{
  variant: ArrowContainerVariants;
}>`
  position: absolute;
  top: 45%;
  ${({variant}) => arrowStyles[variant]};

  will-change: transform;
  transform: translateY(-50%);
`;

export const ImageContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;

  border: 3px solid ${({theme}) => theme.colors.black};

  @media ${({theme}) => theme.sizes.desktop} {
    height: 280px;
    max-height: unset;
  }

  &[aria-selected='true'] {
    display: flex;
  }

  & > img {
    height: 160px;
    max-width: 100%;

    @media ${({theme}) => theme.sizes.desktop} {
      height: unset;
    }
  }
`;

export const CarouselNavigation = styled.div`
  margin-top: 2rem;
  margin-left: 50%;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  will-change: transform;
  transform: translateX(-50%);
`;

export const StyledCarousel = styled.div`
  position: relative;
`;
