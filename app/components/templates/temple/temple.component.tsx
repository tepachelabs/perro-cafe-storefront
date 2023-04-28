import {
  TempleContainer,
  PrimaryContainer,
  SecondaryContainer,
  AddressContainer,
  ExplosionBadgeContainer,
  ScheduleContainer,
  LineContainer,
} from './temple.styles';
import configData from '../../../config.json';
import {ExplosionBadge} from '../../atoms/explosion-badge';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {Hr} from '../../atoms/hr';
import {MapSketch} from '../../atoms/map-sketch';
import {Paragraph} from '../../atoms/paragraph';
import {Subtitle} from '../../molecules/title-section';

export const Temple = () => (
  <>
    <TempleContainer>
      <PrimaryContainer>
        <Subtitle icon="temple">El templo</Subtitle>
        <AddressContainer>
          <Paragraph bold>Dirección</Paragraph>
          <Paragraph>{configData.location}</Paragraph>
        </AddressContainer>
        <Hr />
        <ScheduleContainer>
          <Paragraph bold>Horario</Paragraph>
          <Paragraph>{configData.schedule.weekdays}</Paragraph>
          <Paragraph>{configData.schedule.sunday}</Paragraph>
          <ExplosionBadgeContainer>
            <ExplosionBadge label="HMO." />
          </ExplosionBadgeContainer>
        </ScheduleContainer>
        <HorizontalButton
          label="¿Cómo llegar?"
          href={configData.globalLinks.googleMaps}
        />
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
