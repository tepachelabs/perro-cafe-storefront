import {ReactNode} from 'react';
import styled from 'styled-components';

import {select} from '../../../utils';

export interface TitleSectionProps {
  children?: ReactNode;
  icon?: 'community' | 'cult' | 'menu' | 'temple';
  numeral?: string;
}

export const Frame = styled.div`
  display: inline-flex;
  gap: 1em;
`;

export const Icon = styled.img`
  width: 60px;
`;

export const Text = styled.h2<{numeral?: string}>`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: ${({theme, numeral}) =>
    numeral ? theme.sizes.numeralSubheader : theme.sizes.subHeader};
  font-weight: 400;
  ${({numeral}) => !numeral && 'text-transform: uppercase;'};

  &:after {
    border-bottom: ${select(({sizes}) => sizes.borderWidth)} solid
      ${({theme}) => theme.colors.black};
    content: ' ';
    display: block;
    height: 4px;
    position: absolute;
    width: 156px;
  }
`;
