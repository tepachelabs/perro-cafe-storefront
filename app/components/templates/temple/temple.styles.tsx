import styled, {css} from 'styled-components';

const desktopMediaQuery = css`
  ${({theme}) => theme.mediaQueries.desktop}
`;

const maxWidth = css`
  max-width: ${({theme}) => theme.sizes.maxWidth};
`;

export const TempleContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin: 0 auto;
  ${maxWidth}

  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem 1.25rem 1rem;

  ${desktopMediaQuery} {
    flex: 1;
    padding: 2rem 1.25rem;
  }
`;

export const SecondaryContainer = styled.div`
  padding: 1rem 1.25rem 1rem 1.25rem;

  ${desktopMediaQuery} {
    flex: 1.6;
    padding: 2rem 1.25rem 2rem 0;
  }
`;

export const AddressContainer = styled.div`
  margin-top: 1rem;
`;

export const ExplosionBadgeContainer = styled.div`
  float: right;
`;

export const LineContainer = styled.div`
  padding: 0 1.25rem;
  margin: 0 auto;
  ${maxWidth}

  ${desktopMediaQuery} {
    margin: 1rem auto;
  }
`;

// empty on purpose
export const ScheduleContainer = styled.div``;
