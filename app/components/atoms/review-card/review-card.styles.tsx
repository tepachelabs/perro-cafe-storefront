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
  font-size: 1.2em;
  justify-content: space-between;

  ${({variant}) => variants[variant]}
`;

export const Img = styled.img`
  background-color: ${({theme}) => theme.colors.backgroundDarker};
  width: calc(50% - ${BORDER_WIDTH / 2}px);
`;

export const Content = styled.div`
  border-left: ${BORDER_WIDTH}px solid ${({theme}) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 1em;
  width: calc(50% - ${BORDER_WIDTH / 2}px);
`;

// empty on purpose
export const Review = styled.div``;

export const Author = styled.div`
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
