import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

export type ReviewCardVariant = 'green' | 'orange' | 'yellow';

const borderStyle = ({theme}: {theme: Theme}) => css`
  ${theme.sizes.borderWidth} solid ${theme.colors.black}
`;

const variants = {
  green: ({theme}: {theme: Theme}) => css`
    background-color: ${theme.colors.secondary};
  `,
  orange: ({theme}: {theme: Theme}) => css`
    background-color: ${theme.colors.primary};
  `,
  yellow: ({theme}: {theme: Theme}) => css`
    background-color: ${theme.colors.tertiary};
  `,
};

export const Frame = styled.div<{variant: ReviewCardVariant}>`
  align-items: stretch;
  display: flex;
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 1em;
  justify-content: space-between;
  border: ${borderStyle};

  ${({variant}) => variants[variant]}

  ${(props) => props.theme.mediaQueries.desktop} {
    font-size: 0.8em;
  }
`;

export const Img = styled.img`
  background-color: ${(props) => props.theme.colors.backgroundDarker};
  object-fit: cover;
  width: 50%;
`;

export const Content = styled.div`
  border-left: ${borderStyle};
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
    background-color: ${(props) => props.theme.colors.black};
    height: ${(props) => props.theme.sizes.borderWidth};
    left: 0;
    position: absolute;
    top: -0.5em;
    width: 2em;
  }
`;
