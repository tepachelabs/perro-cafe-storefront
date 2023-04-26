import hand from './img/hand.svg';
import map from './img/map.svg';
import {MapSketchContainer, HandOverlay, MapImage} from './map-sketch.styles';

export const MapSketch = () => {
  return (
    <MapSketchContainer>
      <HandOverlay src={hand} alt="Mano indicando la ubicación" />
      <MapImage src={map} alt="Ilustración del mapa" />
    </MapSketchContainer>
  );
};
