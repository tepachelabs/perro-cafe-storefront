import {FC} from 'react';

import {StyledParagraph} from './Paragraph.styles';

interface Props {
  children?: string;
  lineHeight?: number | string ;
  bold?: boolean;
  italic?: boolean;
}

export const Paragraph: FC<Props> = ({children, lineHeight = 1.5, bold = false, italic = false}) => {
  return (
    <StyledParagraph lineHeight={lineHeight} bold={bold} italic={italic}>
      {children}
    </StyledParagraph>
  );
};
