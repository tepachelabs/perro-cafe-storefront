import styled, {keyframes} from 'styled-components';

const handAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const MapSketchContainer = styled.div`
  position: relative;
`;

export const HandOverlay = styled.img`
  position: absolute;
  top: 19%;
  right: 16%;
  width: 12%;
  animation-name: ${handAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  z-index: 1;
`;

export const MapImage = styled.img`
  width: 100%;
`;
