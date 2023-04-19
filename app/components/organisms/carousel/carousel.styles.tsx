import styled, {css} from 'styled-components';

export type ArrowContainerVariants = 'right' | 'left';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

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
  top: 47%;
  ${({variant}) => arrowStyles[variant]};

  will-change: transform;
  transform: translateY(-50%);
`;

export const ImageContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};

  border: 3px solid ${({theme}) => theme.colors.black};

  &[aria-selected='true'] {
    display: flex;
  }

  & > img {
    max-width: 100%;
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
