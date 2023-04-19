import styled, {css} from 'styled-components';

export type ReviewCardVariant = 'green' | 'orange' | 'yellow';

const BORDER_WIDTH = 4;

const variants = {
  green: css`
    background-color: ${({theme}) => theme.colors.secondary};
  `,
  orange: css`
    background-color: ${({theme}) => theme.colors.primary};
  `,
  yellow: css`
    background-color: ${({theme}) => theme.colors.tertiary};
  `,
};

export const Frame = styled.div<{variant: ReviewCardVariant}>`
  align-items: stretch;
  border: ${BORDER_WIDTH}px solid ${({theme}) => theme.colors.black};
  display: flex;
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 1em;
  justify-content: space-between;

  ${({variant}) => variants[variant]}

  @media (min-width: 768px) {
    font-size: 0.8em;
  }
`;

export const Img = styled.img`
  background-color: ${({theme}) => theme.colors.backgroundDarker};
  object-fit: cover;
  width: 50%;
`;

export const Content = styled.div`
  border-left: ${BORDER_WIDTH}px solid ${({theme}) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;
  gap: 1rem;
  width: 50%;
`;

// empty on purpose
export const Review = styled.p``;

export const Author = styled.p`
  font-weight: bold;
  position: relative;

  &::before {
    content: ' ';
    background-color: ${({theme}) => theme.colors.black};
    height: ${BORDER_WIDTH}px;
    left: 0;
    position: absolute;
    top: -0.5em;
    width: 2em;
  }
`;
