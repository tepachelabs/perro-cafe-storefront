import styled, {css} from 'styled-components';

import {select} from '../../../utils';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

export const HeroContainer = styled.header`
  display: flex;
  max-width: ${select(({sizes}) => sizes.maxWidth)};
  margin: 0 auto;
  flex-direction: column;

  ${desktopMediaQuery} {
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
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  padding: 1.5rem;

  ${desktopMediaQuery} {
    padding: 2.5rem 4rem;
    border-left: 4px solid ${({theme}) => theme.colors.black};
  }
`;

export const SecondaryContainer = styled.div`
  height: auto;
  position: relative;
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  ${desktopMediaQuery} {
    flex: 1.5;
    border-left: 4px solid ${({theme}) => theme.colors.black};
    border-right: 4px solid ${({theme}) => theme.colors.black};
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

  ${desktopMediaQuery} {
  }
`;

export const CandleImg = styled.img`
    position: absolute;
    width: 50px;
    right: 1.5rem;
    bottom: 1.5rem;

    ${desktopMediaQuery} {
      right: 3rem;
      bottom: 2.5rem;
    }
  }
`;

export const SeeMenuButtonContainer = styled.div`
  display: none;
  ${desktopMediaQuery} {
    position: absolute;
    display: inline-block;
    bottom: 2rem;
    right: 1.5rem;
  }
`;

export const HeroBannerImg = styled.img`
  width: 100%;
  display: block;
  ${desktopMediaQuery} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
