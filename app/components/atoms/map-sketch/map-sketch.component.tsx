import hand from './img/hand.svg';
import map from './img/map.svg';
import {MapSketchContainer, HandOverlay, MapImage} from './map-sketch.styles';

export const MapSketch = () => {
  return (
    <MapSketchContainer>
      <HandOverlay src={hand} />
      <MapImage src={map} alt="ilustración del mapa" />
    </MapSketchContainer>
  );
};
