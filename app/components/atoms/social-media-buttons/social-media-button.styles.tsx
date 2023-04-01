import styled from 'styled-components';

export interface SocialMediaButtonProps {
    icon?: 'instagram' | 'facebook' | 'twitter';
  }  

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};

  img {
    width: 50px;
  }
`;