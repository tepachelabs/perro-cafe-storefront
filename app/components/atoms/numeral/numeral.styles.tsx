import styled from 'styled-components';

import {select} from '../../../utils';

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 60px;
`;

export const Img = styled.img`
  position: relative;
  width: 60px;
`;

export const Label = styled.span`
  position: absolute;

  color: ${select(({colors}) => colors.background)};
  font-family: ${select(({fonts}) => fonts.title)};
  font-size: ${select(({sizes}) => sizes.numeralSubheader)};
`;
