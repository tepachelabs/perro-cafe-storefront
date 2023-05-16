import styled from '@emotion/styled';

export const PerkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.mediaQueries.desktop} {
    align-items: flex-start;
  }
`;

export const LeadingIcon = styled.img`
  width: 50px;
  margin-bottom: 5px;
`;

export const Section = styled.div`
  border-top: 4px solid ${(props) => props.theme.colors.black};
  padding-top: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  max-width: 85px;
`;

export const Label = styled.h3`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 16px;
  font-weight: 700;

  text-align: center;

  ${(props) => props.theme.mediaQueries.desktop} {
    text-align: left;
  }
`;
