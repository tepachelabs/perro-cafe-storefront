import React, {FC} from 'react';

import hand from './img/hand.svg';
import map from './img/map.svg';
import {MapContainer, HandOverlay, MapImage} from './map.styles';

export const Map = () => {
  return (
    <MapContainer>
      <HandOverlay src={hand} />
      <MapImage src={map} />
    </MapContainer>
  );
};
