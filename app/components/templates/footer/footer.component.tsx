import {LocationAddress} from '@shopify/hydrogen/storefront-api-types';
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

interface Props {
  address?: LocationAddress;
  schedule?: MetafieldValue;
}

export const Footer: FC<Props> = ({address, schedule}) => {
  const formattedAddress = address
    ? `${address.address1}, ${address.address2}. C.P. ${address.zip}. ${address.city}, ${address.province}.`
    : configData.location;
  const splitSchedule = schedule
    ? schedule.value.split('\n')
    : configData.schedule;

  return (
    <FooterBackground>
      <FooterContainer>
        <TopContainer>
          <Container>
            <Subtitle>Dirección</Subtitle>
            <LightParagraph>{formattedAddress}</LightParagraph>
          </Container>
          <Container>
            <Subtitle>Horario</Subtitle>
            <ParagraphWrapper>
              {splitSchedule.map((sched) => (
                <LightParagraph key={`Footer Schedule ${sched}`}>
                  {sched}
                </LightParagraph>
              ))}
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
