import {FC, ReactNode} from 'react';

import community from './img/community.svg';
import cult from './img/cult.svg';
import menu from './img/menu.svg';
import temple from './img/temple.svg';
import {
  Label,
  LeadingIcon,
  StyledSectionName,
  Line,
} from './title-section.styles';

interface TitleSectionProps {
  children?: ReactNode;
  icon: 'cult' | 'menu' | 'temple' | 'community';
}

const icons = {
  cult,
  menu,
  temple,
  community,
};

export const TitleSection: FC<TitleSectionProps> = ({icon, children}) => {
  const iconSrc = icons[icon];
  return (
    <StyledSectionName>
      <LeadingIcon src={iconSrc} />
      <Label>
        {children}
        <Line />
      </Label>
    </StyledSectionName>
  );
};
