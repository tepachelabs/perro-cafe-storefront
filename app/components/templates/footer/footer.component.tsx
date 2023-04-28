import {FC} from 'react';

import {
  FooterContainer,
  Container,
  LightParagraph,
  Subtitle,
  ParagraphWrapper,
  SocialMediaWrapper,
  Img,
  PositionedLogo,
  TopContainer,
  BottomContainer,
  FooterBackground,
  CopyrightParagraph,
} from './footer.styles';
import logo from './img/logo.svg';
import sparkle from './img/sparkle.svg';
import configData from '../../../config.json';
import {
  FacebookButton,
  InstagramButton,
  TwitterButton,
} from '../../atoms/social-media-buttons';

export const Footer: FC = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <TopContainer>
          <Container>
            <Subtitle>Dirección</Subtitle>
            <LightParagraph>{configData.location}</LightParagraph>
          </Container>
          <Container>
            <Subtitle>Horario</Subtitle>
            <ParagraphWrapper>
              <LightParagraph bold>
                {configData.schedule.weekdays}
              </LightParagraph>
              <LightParagraph bold>{configData.schedule.sunday}</LightParagraph>
            </ParagraphWrapper>
          </Container>
          <Container>
            <Subtitle>Información</Subtitle>
            <ParagraphWrapper>
              {configData.footerInfo.map((label) => (
                <LightParagraph key={label}>{label}</LightParagraph>
              ))}
            </ParagraphWrapper>
          </Container>
          <Container>
            <Subtitle>Las Redes</Subtitle>
            <SocialMediaWrapper>
              <InstagramButton href={configData.socialMedia.instagram} />
              <FacebookButton href={configData.socialMedia.facebook} />
              <TwitterButton href={configData.socialMedia.twitter} />
            </SocialMediaWrapper>
          </Container>
        </TopContainer>
        <BottomContainer>
          <Img src={sparkle} alt="Gráfico de estrellas" />
          <CopyrightParagraph>{configData.copyright}</CopyrightParagraph>
          <PositionedLogo src={logo} alt="Logo de Culto al Perro Café" />
        </BottomContainer>
      </FooterContainer>
    </FooterBackground>
  );
};
