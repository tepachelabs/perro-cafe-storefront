import {ReactNode} from 'react';
import styled from 'styled-components';

export const LeadingIcon = styled.img`
  width: 50px;
  margin-bottom: 5px;
`;

export const Section = styled.div`
  border-top: 5px solid ${({theme}) => theme.colors.black};
  padding-top: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  max-width: 85px;
`;