import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

const maxWidth = ({theme}: {theme: Theme}) => css`
  max-width: ${theme.sizes.maxWidth};
`;

export const TempleContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin: 0 auto;
  padding: 2em 0;
  ${maxWidth}

  ${({theme}) => theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem 1.25rem 1rem;

  & > a {
    padding: 0;
    margin: 0;
    height: unset;
    line-height: unset;
    border-bottom: none;
  }

  ${({theme}) => theme.mediaQueries.desktop} {
    flex: 1;
    padding: 2rem 1.25rem;
  }
`;

export const SecondaryContainer = styled.div`
  padding: 1rem 1.25rem 1rem 1.25rem;

  ${({theme}) => theme.mediaQueries.desktop} {
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

  ${({theme}) => theme.mediaQueries.desktop} {
    margin: 1rem auto;
  }
`;

// empty on purpose
export const ScheduleContainer = styled.div``;
