import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

import {Paragraph} from '../../atoms/paragraph';

const borderStyle = ({theme}: {theme: Theme}) => css`
  ${theme.sizes.borderWidth} solid ${theme.colors.black}
`;

export const PageHeroContainer = styled.header`
  display: flex;
  max-width: ${({theme}) => theme.sizes.maxWidth};
  //margin: 1rem auto 0;
  margin: 0 auto;
  flex-direction: column;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: transparent;
  border-bottom: ${borderStyle};

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 1.3;
  }

  & > p {
    display: block;

    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.background};

    padding: 1.5rem;

    ${({theme}) => theme.mediaQueries.desktop} {
      padding: 1.5rem 5.5rem;
    }
  }
`;

export const Description = styled(Paragraph)``;

export const SecondaryContainer = styled.div`
  position: relative;
  border-bottom: ${borderStyle};

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 1;
    border: ${borderStyle};
  }
`;

export const RegularsTitle = styled.h1`
  display: block;

  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 400;

  padding: 1.5rem 1.5rem 3rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    padding-top: 3rem;
    padding-left: 1rem;
  }

  &:after {
    border-bottom: ${borderStyle};
    content: ' ';
    display: block;
    height: 4px;
    position: absolute;
    width: 156px;
  }
`;

export const PageHeroBanner = styled.img`
  display: block;

  width: 100%;

  ${({theme}) => theme.mediaQueries.desktop} {
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroButtonContainer = styled.div`
  margin: 0 1.5rem 2rem;

  & > a {
    padding: 0;
    margin: 0;
    height: unset;
    line-height: unset;
    border-bottom: none;
  }
`;
