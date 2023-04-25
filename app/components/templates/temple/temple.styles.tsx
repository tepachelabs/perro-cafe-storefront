import styled from 'styled-components';

const desktopMediaQuery = '@media (min-width: 768px)';

export const TempleContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;

  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  padding: 2rem 1.25rem 1rem 1.25rem;
  position: relative;
  ${desktopMediaQuery} {
    width: 44%;
    padding: 2rem 1.25rem 2rem;
  }
`;

export const SecondaryContainer = styled.div`
  padding: 1rem 1.25rem 1rem 1.25rem;
  position: relative;
  ${desktopMediaQuery} {
    width: 56%;
    margin-top: 0;
    padding: 2rem 1.25rem 2rem 0rem;
  }
`;

export const PrimaryTextContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1.2rem;
`;

export const SecondaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${desktopMediaQuery} {
    white-space: nowrap;
  }
`;

export const ExplosionBadgeContainer = styled.div`
  position: relative;
  display: inline-block;
  float: right;
  ${desktopMediaQuery} {
    display: block;
    position: relative;
  }
`;

export const LineContainer = styled.div`
  padding: 1.4rem 1.25rem 0rem 1.25rem;
  margin: 0 auto;
  ${desktopMediaQuery} {
    padding: 0rem 1.2rem 0rem 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 960px;
  }
`;

export const HoursContainer = styled.div`
  padding-top: 1.2rem;
  ${desktopMediaQuery} {
    padding-top: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const HorizontalButtonContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;

  ${desktopMediaQuery} {
    padding-top: 2rem;
  }
`;
