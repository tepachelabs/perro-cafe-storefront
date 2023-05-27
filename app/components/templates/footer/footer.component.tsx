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
import logoSimple from './img/logo-simple.svg';
import sparkles from './img/sparkles.svg';
import configData from '../../../config.json';
import {
  FacebookButton,
  InstagramButton,
  TwitterButton,
} from '../../molecules/social-media-buttons';

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
              <LightParagraph>{configData.schedule.weekdays}</LightParagraph>
              <LightParagraph>{configData.schedule.sunday}</LightParagraph>
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
              <InstagramButton
                inverted
                href={configData.socialMedia.instagram}
              />
              <FacebookButton inverted href={configData.socialMedia.facebook} />
              <TwitterButton inverted href={configData.socialMedia.twitter} />
            </SocialMediaWrapper>
          </Container>
        </TopContainer>
        <BottomContainer>
          <Img src={sparkles} alt="Gráfico de estrellas" />
          <CopyrightParagraph>{configData.copyright}</CopyrightParagraph>
          <PositionedLogo src={logoSimple} alt="Logo de Culto al Perro Café" />
        </BottomContainer>
      </FooterContainer>
    </FooterBackground>
  );
};
