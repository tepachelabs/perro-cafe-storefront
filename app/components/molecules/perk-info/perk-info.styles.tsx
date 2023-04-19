import styled from 'styled-components';

const desktopMediaQuery = '@media (min-width: 768px)';

export const PerkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${desktopMediaQuery} {
    align-items: flex-start;
  }
`;

export const LeadingIcon = styled.img`
  width: 50px;
  margin-bottom: 5px;
`;

export const Section = styled.div`
  border-top: 4px solid ${({theme}) => theme.colors.black};
  padding-top: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  max-width: 85px;
`;

export const Label = styled.h3`
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 16px;
  font-weight: 700;

  text-align: center;

  ${desktopMediaQuery} {
    text-align: left;
  }
`;
