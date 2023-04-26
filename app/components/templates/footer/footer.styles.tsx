import styled, {css} from 'styled-components';

import {Paragraph} from '../../atoms/paragraph';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

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

  ${desktopMediaQuery} {
    padding: 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${desktopMediaQuery} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BottomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${desktopMediaQuery} {
    gap: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${desktopMediaQuery} {
    flex: 1;
  }
`;

export const Subtitle = styled(Paragraph)`
  color: ${({theme}) => theme.colors.backgroundDarker};
  font-family: ${({theme}) => theme.fonts.title};
  text-transform: uppercase;
`;

export const LightParagraph = styled(Paragraph)`
  color: ${({theme}) => theme.colors.backgroundDarker};
  font-size: 12px;
`;

export const CopyrightParagraph = styled(LightParagraph)`
  margin-right: 3rem;

  ${desktopMediaQuery} {
    margin-right: 0;
  }
`;

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

  ${desktopMediaQuery} {
    margin-right: 2rem;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Img = styled.img`
  width: 6em;
  margin-top: 1rem;

  ${desktopMediaQuery} {
    margin-top: 0;
  }
`;

export const PositionedLogo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 3em;

  ${desktopMediaQuery} {
    width: 4em;
  }
`;

// empty on purpose
export const ParagraphWrapper = styled.div``;
