import styled from 'styled-components';

export const HeroContainer = styled.header`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  align-items: stretch;
  flex-direction: column;
  @media screen and (min-width: 960px) {
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
  @media screen and (min-width: 960px) {
    border-left: 4px solid ${({theme}) => theme.colors.black};
    padding-top: 50px;
  }
`;

export const SecondaryContainer = styled.div`
  height: auto;
  position: relative;
  background-color: red;
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  @media screen and (min-width: 960px) {
    height: 373px;
    flex: 1.1;
    border-left: 4px solid ${({theme}) => theme.colors.black};
    border-right: 4px solid ${({theme}) => theme.colors.black};
  }
`;

export const HeadingImg = styled.img`
  width: 80%;
  margin-left: 25px;
  @media screen and (min-width: 960px) {
    margin-left: 80px;
    width: 60%;
  }
`;

export const TextContainer = styled.div`
  margin: 16px 0 26px 25px;
  @media screen and (min-width: 960px) {
    margin-left: 80px;
  }
`;

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 115px 0 25px;
  @media screen and (min-width: 960px) {
    margin: 0 160px 0 80px;
    padding-top: 25px;
  }
`;

export const CandleImg = styled.img`
    position: absolute;
    width: 100px;
    right: 0px;
    bottom: 21px;

    @media screen and (min-width: 960px) {
      width: 120px;
      right: 30px;
      bottom: 30px;
    }
  }
`;

export const SeeMenuButtonContainer = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    position: absolute;
    display: inline-block;
    margin-top: 217px;
    margin-left: 356px;
  }
`;

export const HeroBannerImg = styled.img`
  width: 100%;
  display: block;
  @media screen and (min-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;
