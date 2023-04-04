import {ReactNode} from 'react';
import styled from 'styled-components';

export interface Props {
  variant: 'internet' | 'events' | 'ingredients' | 'games';
  children: ReactNode;
}

export const LeadingIcon = styled.img`
  width: 50px;
`;

export const StyledSectionInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  max-width: 85px;
`;
