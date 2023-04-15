import styled from 'styled-components';

const desktopMediaQuery = '@media (min-width: 768px)';

export const MenuContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  margin: 0 auto;
  max-width: 960px;

  background-color: ${({theme}) => theme.colors.background};

  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  padding: 1.65rem 1.25rem 1.75rem;

  ${desktopMediaQuery} {
    width: 50%;
  }
`;

export const SecondaryContainer = styled.div`
  position: relative;
  padding: 1.25rem 1.25rem 2rem;

  ${desktopMediaQuery} {
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

  ${desktopMediaQuery} {
    margin: 6rem 0 1.75rem;
  }
`;

export const TextContainer = styled.div`
  margin: 2.5rem 0;

  ${desktopMediaQuery} {
    margin: 2.5rem 0 4.5rem;
  }
`;
