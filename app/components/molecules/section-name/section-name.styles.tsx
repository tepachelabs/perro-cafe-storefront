import styled from 'styled-components';

export interface Props {
  variant: 'none' | 'cult' | 'menu' | 'temple' | 'community';
  label: string;
}

export const LeadingIcon = styled.img`
  width: 60px;

  margin-right: 8px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled.h1`
  color: ${({theme}) => theme.colors.black};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.title};
  font-size: 44px;
  text-transform: uppercase;
`;

export const HrContainer = styled.div`
  position: absolute;
  top: 90px;

  width: 140px;

  padding-left: 3px;
`;

export const StyledSectionName = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  max-width: 300px;
`;
