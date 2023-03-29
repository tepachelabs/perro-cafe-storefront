import {FC} from 'react';

import {StyledParagraph} from './Paragraph.styles';

interface Props {
  text?: string;
  height: 'small' | 'large';
  weight: 'normal' | 'bold';
}

export const Paragraph: FC<Props> = ({text, height, weight}) => {
  return (
    <StyledParagraph height={height} weight={weight}>
      {text}
    </StyledParagraph>
  );
};
