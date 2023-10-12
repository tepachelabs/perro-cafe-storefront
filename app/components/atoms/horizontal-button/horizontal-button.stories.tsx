import {Meta, StoryObj} from '@storybook/react';

import {HorizontalButton} from './horizontal-button.component';
import {LinkWrapper} from './horizontal-button.styles';
import configData from '../../../config.json';
import {CustomLink} from '../link';

export default {
  title: 'Atoms/HorizontalButton',
  component: HorizontalButton,
} as Meta<typeof HorizontalButton>;

type Story = StoryObj<typeof HorizontalButton>;

export const SeeMenu: Story = {
  render: (args) => (
    <LinkWrapper>
      <HorizontalButton {...args} />
    </LinkWrapper>
  ),
  args: {
    label: 'VER EL MENÚ',
    href: configData.globalLinks.menu,
    linkRender: (props) => <CustomLink {...props} />,
  },
};
export const Directions: Story = {
  render: (args) => (
    <LinkWrapper>
      <HorizontalButton {...args} />
    </LinkWrapper>
  ),
  args: {
    label: '¿CÓMO LLEGAR?',
    href: configData.globalLinks.googleMaps,
    linkRender: (props) => <CustomLink {...props} />,
  },
};
