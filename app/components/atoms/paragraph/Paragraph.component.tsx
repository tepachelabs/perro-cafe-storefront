import {FC} from 'react';

import {StyledParagraph} from './Paragraph.styles';

interface Props {
    text?: string;
}

export const Paragraph: FC<Props> = ({text}) => {
    return (
        <StyledParagraph>{text}</StyledParagraph>
    );
  };
  