import styled from '@emotion/styled';

import theme from '~/theme';

export const MenuPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem 1rem 2rem;
  margin: 0 auto;
  max-width: ${({theme}) => theme.sizes.maxWidth};
  max-width: calc(${({theme}) => theme.sizes.maxWidth} * 0.7);
`;

export const CollectionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.75em 0;
  gap: 1rem;
`;

export const Img = styled.img`
  width: 100%;
`;

export const CollapsibleTrigger = styled.button`
  border: 2px solid ${theme.colors.black};
  cursor: pointer;
  padding: 1em;
  width: fit-content;
  text-align: left;
  background: transparent;
`;

export const CollapsibleContent = styled.div<{isOpen: boolean}>`
  height: 0;
  overflow: hidden;
  position: absolute;

  ${({isOpen}) =>
    isOpen &&
    `
    position: static;
    height: fit-content;
  `};
`;
