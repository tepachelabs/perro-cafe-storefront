import styled from '@emotion/styled';

import {Hr} from '../../atoms/hr';

export const InfoSection = styled.section`
  max-width: ${({theme}) => theme.sizes.maxWidth};
  margin: 1rem auto;
  padding: 1rem;
  color: ${({theme}) => theme.colors.black};

  & hr {
    margin: 1.5rem 0;
  }

  & h2 {
    font-size: ${({theme}) => theme.sizes.subHeader};
    font-family: ${({theme}) => theme.fonts.title};
    font-weight: normal;
  }

  & p {
    font-family: ${({theme}) => theme.fonts.body};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${({theme}) => theme.mediaQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BlockDivider = styled(Hr)``;

export const SectionDividerContainer = styled.div`
  margin: 2rem 0;
`;
