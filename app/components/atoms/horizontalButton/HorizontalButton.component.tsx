import {FC} from 'react';

import {
  Arrow,
  ButtonFace,
  ContentText,
  HorizontalButtonProps,
  StyledHorizontalButton,
} from './HorizontalButton.styles';

export const HorizontalButton: FC<HorizontalButtonProps> = ({
  content,
  ...props
}) => {
  return (
    <StyledHorizontalButton {...props}>
      <ButtonFace>
        <ContentText>{content}</ContentText>
        <Arrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
          >
            <path
              d="M2.37 23.45L0.25 21.33L9.59 11.99L0.25 2.60999L2.37 0.5L13.83 12L2.37 23.45Z"
              fill="#222222"
            />
          </svg>
        </Arrow>
      </ButtonFace>
    </StyledHorizontalButton>
  );
};
