import styled from '@emotion/styled';

import {Paragraph} from '../../atoms/paragraph';

export const FooterBackground = styled.footer`
  background-color: ${({theme}) => theme.colors.black};
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: ${({theme}) => theme.sizes.maxWidth};

  ${({theme}) => theme.mediaQueries.desktop} {
    padding: 2rem;
  }

  & p {
    color: ${({theme}) => theme.colors.backgroundDarker};
    font-size: 16px;

    ${({theme}) => theme.mediaQueries.desktop} {
      font-size: 14px;
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BottomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    gap: 1rem;
  }

  & > p {
    margin-right: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 1;
  }
`;

export const Subtitle = styled.h3`
  color: ${({theme}) => theme.colors.backgroundDarker};
  font-family: ${({theme}) => theme.fonts.title};
  font-weight: normal;
  text-transform: uppercase;
`;

export const LightParagraph = styled(Paragraph)``;

export const CopyrightParagraph = styled(LightParagraph)``;

export const SocialMediaWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 4rem;

  &::before {
    content: ' ';
    background-color: ${({theme}) => theme.colors.backgroundDarker};
    height: 4px;
    width: 8em;

    position: absolute;
    bottom: -2em;
    left: 0;
  }

  ${({theme}) => theme.mediaQueries.desktop} {
    margin-right: 2rem;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Img = styled.img`
  width: 6em;
  margin-top: 1rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    margin-top: 0;
  }
`;

export const PositionedLogo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 3em;

  ${({theme}) => theme.mediaQueries.desktop} {
    width: 4em;
  }
`;

// empty on purpose
export const ParagraphWrapper = styled.div``;
