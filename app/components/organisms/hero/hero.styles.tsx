import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

const borderStyle = ({theme}: {theme: Theme}) => css`
  ${theme.sizes.borderWidth} solid ${theme.colors.black}
`;

export const HeroContainer = styled.header`
  display: flex;
  max-width: ${({theme}) => theme.sizes.maxWidth};
  margin: 0 auto;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;

  background-color: ${({theme}) => theme.colors.primary};
  border-bottom: ${borderStyle};
  padding: 1.5rem;

  ${(props) => props.theme.mediaQueries.desktop} {
    padding: 2.5rem 4rem;
    border-left: ${borderStyle};
  }
`;

export const SecondaryContainer = styled.div`
  height: auto;
  position: relative;
  border-bottom: ${borderStyle};

  ${(props) => props.theme.mediaQueries.desktop} {
    flex: 1.5;
    border-left: ${borderStyle};
    border-right: ${borderStyle};
  }
`;

export const HeadingImg = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div``;

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 0.5rem;
  max-width: 200px;
`;

export const CandleImg = styled.img`
  position: absolute;
  width: 50px;
  right: 1.5rem;
  bottom: 1.5rem;

  ${(props) => props.theme.mediaQueries.desktop} {
    right: 3rem;
    bottom: 2.5rem;
  }
`;

export const SeeMenuButtonContainer = styled.div`
  display: none;

  ${(props) => props.theme.mediaQueries.desktop} {
    position: absolute;
    display: inline-block;
    bottom: 2rem;
    right: 1.5rem;
  }
`;

export const HeroBannerImg = styled.img`
  width: 100%;
  display: block;

  ${(props) => props.theme.mediaQueries.desktop} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
