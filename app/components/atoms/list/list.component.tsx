import {css, Theme} from '@emotion/react';
import styled from '@emotion/styled';

const ListStyle = ({theme}: {theme: Theme}) => css`
  margin-bottom: 1.25rem;

  & > li::marker {
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.body};
  }
`;

export const List = styled.ul`
  ${ListStyle};
`;

export const OrderedList = styled.ol`
  ${ListStyle};
`;

export const ListItem = styled.li``;
