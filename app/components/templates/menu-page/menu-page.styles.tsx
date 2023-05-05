import styled, {css} from 'styled-components';

import {select} from '../../../utils';

const desktopMediaQuery = css`
  ${select(({mediaQueries}) => mediaQueries.desktop)}
`;

export const MenuPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;
  margin: 0 auto;
  max-width: ${select(({sizes}) => sizes.maxWidth)};
`;

export const CollectionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${desktopMediaQuery} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 100%;
`;
