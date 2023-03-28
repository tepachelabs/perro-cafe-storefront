import {FC} from 'react';
import {StyledLine, LineVariant} from './Line.styles'

interface Props {
  size?: 'small' | 'medium' | 'max' ;
  color?: 'dark' | 'light';
}

export const Line: FC<Props> = ({size, color}) => {
  return (
      <StyledLine size={size} color={color}></StyledLine>
  );
};
