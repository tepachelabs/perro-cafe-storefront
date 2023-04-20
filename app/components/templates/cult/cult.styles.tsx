import styled, {css} from 'styled-components';

import {Paragraph} from '../../atoms/paragraph';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

export const CultSection = styled.section`
  background-color: ${({theme}) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 1.25rem;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const Description = styled(Paragraph).attrs({
  bold: true,
})`
  border-bottom: 4px solid ${({theme}) => theme.colors.black};
  padding-bottom: 0.5rem;

  ${desktopMediaQuery} {
    max-width: 50%;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${desktopMediaQuery} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  }
`;

export const CarouselContainer = styled.div`
  ${desktopMediaQuery} {
    flex: 2;
  }
`;

export const PerksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${desktopMediaQuery} {
    flex: 1;
    gap: 2rem;
  }
`;
