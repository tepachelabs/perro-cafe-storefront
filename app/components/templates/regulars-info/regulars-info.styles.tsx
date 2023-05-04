import styled, {css} from 'styled-components';

import {select} from '../../../utils';
import {Hr} from '../../atoms/hr';

const desktopMediaQuery = css`
  ${select(({mediaQueries}) => mediaQueries.desktop)}
`;

export const InfoSection = styled.section`
  max-width: ${select(({sizes}) => sizes.maxWidth)};
  margin: 1rem auto;
  padding: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${desktopMediaQuery} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BlockDivider = styled(Hr)`
  margin: 1.5rem 0;
`;

export const SectionDividerContainer = styled.div`
  margin: 2rem 0;
`;
