import styled from 'styled-components';

export type ReviewCardVariant = 'green' | 'orange' | 'yellow';

const BORDER_WIDTH = 4;

const frameBgColor: Record<ReviewCardVariant, string> = {
  green: '#35ae9f',
  orange: '#f1774c',
  yellow: '#f3b760',
};

export const Frame = styled.div<{variant: ReviewCardVariant}>`
  align-items: stretch;
  background-color: ${({variant}) => frameBgColor[variant]};
  border: ${BORDER_WIDTH}px solid #222;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  justify-content: space-between;
`;

export const Img = styled.img`
  background-color: #f2dab2;
  width: calc(50% - ${BORDER_WIDTH / 2}px);
`;

export const Content = styled.div`
  border-left: ${BORDER_WIDTH}px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 1em;
  width: calc(50% - ${BORDER_WIDTH / 2}px);
`;

// empty on purpose
export const Review = styled.div``;

export const Author = styled.div`
  font-weight: bold;
  position: relative;

  &::before {
    content: ' ';
    background-color: #222;
    height: ${BORDER_WIDTH}px;
    left: 0;
    position: absolute;
    top: -0.5em;
    width: 2em;
  }
`;
