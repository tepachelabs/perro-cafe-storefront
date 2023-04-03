import {FC} from 'react';

import events from './img/events.svg';
import games from './img/games.svg';
import ingredients from './img/ingredients.svg';
import internet from './img/internet.svg';
import {LeadingIcon, Props, StyledSectionInfo} from './section-info.styles';
import {Hr} from '../../atoms/hr';
import {Paragraph} from '../../atoms/paragraph';

export const SectionInfo: FC<Props> = ({children, variant = 'none'}) => {
  let leadingIcon;

  switch (variant) {
    case 'internet':
      leadingIcon = internet;
      break;
    case 'ingredients':
      leadingIcon = ingredients;
      break;
    case 'games':
      leadingIcon = games;
      break;
    case 'events':
      leadingIcon = events;
      break;
    default:
      break;
  }

  return (
    <StyledSectionInfo>
      {leadingIcon && <LeadingIcon src={leadingIcon} />}
      <Hr></Hr>
      <Paragraph bold>{children}</Paragraph>
    </StyledSectionInfo>
  );
};
