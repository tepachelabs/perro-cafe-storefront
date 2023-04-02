import {FC} from 'react';

import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {
  HrContainer,
  Label,
  LabelContainer,
  LeadingIcon,
  Props,
  StyledSectionName,
} from './section-name.styles';
import {Hr} from '../../atoms/hr';

export const SectionName: FC<Props> = ({variant = 'none', label}) => {
  let leadingIcon;

  switch (variant) {
    case 'cult':
      leadingIcon = cult;
      break;
    case 'menu':
      leadingIcon = menu;
      break;
    case 'temple':
      leadingIcon = temple;
      break;
    default:
      break;
  }

  return (
    <StyledSectionName>
      {leadingIcon && <LeadingIcon src={leadingIcon} />}
      <LabelContainer>
        <Label>{label}</Label>
        <HrContainer>
          <Hr />
        </HrContainer>
      </LabelContainer>
    </StyledSectionName>
  );
};
