import styled, {css} from 'styled-components';

import {select} from '../../../utils';
import {Paragraph} from '../../atoms/paragraph';

const desktopMediaQuery = css`
  ${select(({mediaQueries}) => mediaQueries.desktop)}
`;

export const RegularsHeroContainer = styled.header`
  display: flex;
  max-width: ${select(({sizes}) => sizes.maxWidth)};
  margin: 1rem auto 0;
  flex-direction: column;

  ${desktopMediaQuery} {
    flex-direction: row;
  }
`;

export const PrimaryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: transparent;
  border-bottom: ${select(({sizes}) => sizes.borderWidth)} solid
    ${select(({colors}) => colors.black)};

  ${desktopMediaQuery} {
    flex: 1.3;
  }
`;

export const Description = styled(Paragraph)`
  display: block;

  background-color: ${select(({colors}) => colors.black)};
  color: ${select(({colors}) => colors.background)};

  padding: 1.5rem;

  ${desktopMediaQuery} {
    padding: 1.5rem 5.5rem;
  }
`;

export const SecondaryContainer = styled.div`
  position: relative;
  border-bottom: 4px solid ${select(({colors}) => colors.black)};

  ${desktopMediaQuery} {
    flex: 1;
    border: 4px solid ${select(({colors}) => colors.black)};
  }
`;

export const RegularsTitle = styled.h1`
  display: block;

  color: ${select(({colors}) => colors.black)};
  font-family: ${select(({fonts}) => fonts.title)};
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 400;

  padding: 1.5rem;

  ${desktopMediaQuery} {
    padding: 3rem 1.5rem;
  }

  &:after {
    border-bottom: ${select(({sizes}) => sizes.borderWidth)} solid
      ${select(({colors}) => colors.black)};
    content: ' ';
    display: block;
    height: 4px;
    position: absolute;
    width: 156px;
  }
`;

export const RegularsHeroBanner = styled.img`
  display: block;

  width: 100%;

  ${desktopMediaQuery} {
    height: 100%;
    object-fit: cover;
  }
`;
