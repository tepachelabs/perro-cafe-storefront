import {ReactNode} from 'react';
import styled, {css} from 'styled-components';

export const StyledSectionName = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 300px;
  max-height: 78px;
`;

export const LeadingIcon = styled.img`
  width: 60px;
  margin-right: 20px;
  align-self: center;
`;

export const Label = styled.h1`
  color: ${({theme}) => theme.colors.black};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 32px;
  text-transform: uppercase;
`;
export const Line = styled.div`
  margin-top: 5px;
  bottom: 0;
  left: 0;
  width: 140px;
  height: 4px;
  background-color: ${({theme}) => theme.colors.black};
`;
