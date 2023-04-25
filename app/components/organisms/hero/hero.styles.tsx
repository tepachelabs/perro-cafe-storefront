import styled, {css} from 'styled-components';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

export const HeroContainer = styled.header`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  align-items: stretch;
  flex-direction: column;
  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: ${({theme}) => theme.colors.primary};
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  padding-top: 20px;
  padding-bottom: 30px;
  ${desktopMediaQuery} {
    border-left: 4px solid ${({theme}) => theme.colors.black};
    padding-top: 1.5rem;
    padding-bottom: 0;
  }
`;

export const SecondaryContainer = styled.div`
  height: auto;
  position: relative;
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  ${desktopMediaQuery} {
    flex: 1.1;
    border-left: 4px solid ${({theme}) => theme.colors.black};
    border-right: 4px solid ${({theme}) => theme.colors.black};
  }
`;

export const HeadingImg = styled.img`
  width: 80%;
  margin-left: 25px;
  ${desktopMediaQuery} {
    margin-top: 26px;
    margin-left: 80px;
    width: 60%;
  }
`;

export const TextContainer = styled.div`
  margin: 16px 0 26px 25px;
  ${desktopMediaQuery} {
    margin-left: 80px;
  }
`;

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 115px 0 25px;
  ${desktopMediaQuery} {
    margin: 0 160px 0 80px;
    padding-top: 25px;
  }
`;

export const CandleImg = styled.img`
    position: absolute;
    width: 100px;
    right: 0px;
    bottom: 21px;

    ${desktopMediaQuery} {
      width: 120px;
      right: 30px;
      bottom: 30px;
    }
  }
`;

export const SeeMenuButtonContainer = styled.div`
  display: none;
  ${desktopMediaQuery} {
    position: absolute;
    display: inline-block;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export const HeroBannerImg = styled.img`
  width: 100%;
  display: block;
  ${desktopMediaQuery} {
    width: 100%;
    height: 100%;
  }
`;
