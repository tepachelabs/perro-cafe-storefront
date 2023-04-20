import {FC, ReactNode} from 'react';

import {
  TempleContainer,
  PrimaryContainer,
  SecondaryContainer,
  PrimaryTextContainer,
  SecondaryTextContainer,
  ExplosionBadgeContainer,
  HoursContainer,
  LineContainer,
  HorizontalButtonContainer,
} from './temple.styles';
import configData from '../../../config/config.json';
import {ExplosionBadge} from '../../atoms/explosion-badge';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {Hr} from '../../atoms/hr';
import {MapSketch} from '../../atoms/map-sketch';
import {Paragraph} from '../../atoms/paragraph';
import {TitleSection} from '../../molecules/title-section';

export const Temple = () => {
  const navigateToLocation = () =>
    window.open(configData.globalLinks.googleMaps, '_blank');

  return (
    <>
      <TempleContainer>
        <PrimaryContainer>
          <TitleSection icon="temple">El templo</TitleSection>
          <PrimaryTextContainer>
            <Paragraph bold lineHeight="20px">
              Dirección
            </Paragraph>
            <Paragraph lineHeight="20px">
              Blvd. Juan Navarrete 125 | Local 15. Valle Verde. C.P. 83200.
              Hermosillo, Sonora
            </Paragraph>
          </PrimaryTextContainer>
          <Hr />
          <HoursContainer>
            <SecondaryTextContainer>
              <Paragraph bold lineHeight="20px">
                Horario
              </Paragraph>
              <Paragraph lineHeight="20px">
                {configData.location.hours[0].week}
              </Paragraph>
              <Paragraph lineHeight="20px">
                {configData.location.hours[0].sunday}
              </Paragraph>
            </SecondaryTextContainer>
            <ExplosionBadgeContainer>
              <ExplosionBadge label="HMO." />
            </ExplosionBadgeContainer>
          </HoursContainer>
          <HorizontalButtonContainer>
          <HorizontalButton
            label="¿Cómo llegar?"
            onClick={navigateToLocation}
          />
          </HorizontalButtonContainer>
        </PrimaryContainer>
        <SecondaryContainer>
          <MapSketch />
        </SecondaryContainer>
      </TempleContainer>
      <LineContainer>
        <Hr />
      </LineContainer>
    </>
  );
};
