import {
  LocationAddress,
  Metafield,
} from '@shopify/hydrogen/storefront-api-types';
import {FC} from 'react';

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
import {LinkRender} from '../../atoms/link';
import {MapSketch} from '../../atoms/map-sketch';
import {Paragraph} from '../../atoms/paragraph';
import {Subtitle} from '../../molecules/subtitle';

interface Props {
  address?: LocationAddress;
  schedule?: Pick<Metafield, 'value'>;
  linkRender: LinkRender;
  showRuler?: boolean;
}

export const Temple: FC<Props> = ({
  address,
  schedule,
  linkRender: _Link,
  showRuler = true,
}) => {
  const formattedAddress = address
    ? `${address.address1}, ${address.address2}. C.P. ${address.zip}. ${address.city}, ${address.province}.`
    : configData.location;
  const splitSchedule = schedule
    ? schedule.value.split('\n')
    : configData.schedule;

  return (
    <>
      <TempleContainer>
        <PrimaryContainer>
          <Subtitle icon="temple">El Templo</Subtitle>
          <AddressContainer>
            <Paragraph bold>Dirección</Paragraph>
            <Paragraph noMargin>{formattedAddress}</Paragraph>
          </AddressContainer>
          <Hr />
          <ScheduleContainer>
            <Paragraph bold>Horario</Paragraph>
            {splitSchedule.map((schedule) => (
              <Paragraph key={`Temple Schedule ${schedule}`} noMargin>
                {schedule}
              </Paragraph>
            ))}
            <ExplosionBadgeContainer>
              <ExplosionBadge label="HMO." />
            </ExplosionBadgeContainer>
          </ScheduleContainer>
          <HorizontalButton
            label="¿Cómo llegar?"
            href={configData.globalLinks.googleMaps}
            linkRender={_Link}
          />
        </PrimaryContainer>
        <SecondaryContainer>
          <MapSketch />
        </SecondaryContainer>
      </TempleContainer>
      {showRuler && (
        <LineContainer>
          <Hr />
        </LineContainer>
      )}
    </>
  );
};
