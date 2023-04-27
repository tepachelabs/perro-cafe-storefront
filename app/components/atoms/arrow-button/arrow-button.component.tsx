import {FC} from 'react';

import {ArrowButton as _ArrowButton} from './arrow-button.styles';

interface ArrowButtonProps {
  onClick: () => void;
  title: string;
}

export const ArrowButton: FC<ArrowButtonProps> = ({onClick, title}) => {
  return <_ArrowButton onClick={onClick} title={title} type="button" />;
};

// alias
export const RightArrow = ArrowButton;

export const LeftArrow: FC<ArrowButtonProps> = ({onClick, title}) => {
  return <_ArrowButton isLeft onClick={onClick} title={title} type="button" />;
};
