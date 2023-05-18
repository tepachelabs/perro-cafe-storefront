import styled from '@emotion/styled';

export const Hr = styled.hr`
  border: none;
  background: ${(props) => props.theme.colors.black};
  height: ${(props) => props.theme.sizes.borderWidth};
  width: 100%;
`;
