import {FC} from 'react';
import {LineDiv, LineVariant} from './Line.styles'

interface Props {
  size?: 'small' | 'medium' | 'max' ;
  color?: 'dark' | 'light';
}

export const Line: FC<Props> = ({size, color}) => {
  return (
      <LineDiv size={size} color={color}></LineDiv>
  );
};
