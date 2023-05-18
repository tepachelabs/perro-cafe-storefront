import styled from '@emotion/styled';

export const MenuContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};

  background-color: ${({theme}) => theme.colors.background};

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  padding: 1.65rem 1.25rem 1.75rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    width: 50%;
  }
`;

export const SecondaryContainer = styled.div`
  position: relative;
  padding: 1.25rem 1.25rem 2rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    width: 50%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const ButtonContainer = styled.div`
  margin: 4rem 0 1.75rem;

  ${({theme}) => theme.mediaQueries.desktop} {
    margin: 6rem 0 1.75rem;
  }
`;

export const TextContainer = styled.div`
  margin: 2.5rem 0;

  ${({theme}) => theme.mediaQueries.desktop} {
    margin: 2.5rem 0 4.5rem;
  }
`;
