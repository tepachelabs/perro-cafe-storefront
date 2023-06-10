import styled from '@emotion/styled';

import {Paragraph} from '../../atoms/paragraph';

export const CultBackground = styled.section`
  background-color: ${({theme}) => theme.colors.secondary};

  width: 100%;
`;

export const CultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;

  padding: 2.75em 1.25em;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};

  border-top: ${({theme}) => theme.sizes.borderWidth} solid
    ${({theme}) => theme.colors.black};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.75em;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
    align-items: flex-end;
  }

  & > p {
    border-bottom: 4px solid ${({theme}) => theme.colors.black};
    padding-bottom: 1em;

    ${({theme}) => theme.mediaQueries.desktop} {
      max-width: 50%;
    }
  }
`;

export const Description = styled(Paragraph)``;

Description.defaultProps = {
  bold: true,
  noMargin: true,
};

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  }
`;

export const CarouselContainer = styled.div`
  margin: 0 auto;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 2;
  }
`;

export const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 1;
    gap: 2rem;
  }
`;
