import styled from 'styled-components';

import {select} from '../../../utils';

export const Frame = styled.div`
  display: inline-flex;
  gap: 1em;
`;

export const Icon = styled.img`
  width: 60px;
`;

export const Text = styled.h2`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.title};
  font-size: ${({theme}) => theme.sizes.subHeader};
  text-transform: uppercase;
  font-weight: 400;

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
