import {Meta, StoryObj} from '@storybook/react';

import {HorizontalButton} from './horizontal-button.component';
import configData from '../../../config.json';
import {CustomLink} from '../link';

export default {
  title: 'Atoms/HorizontalButton',
  component: HorizontalButton,
} as Meta<typeof HorizontalButton>;

type Story = StoryObj<typeof HorizontalButton>;

export const SeeMenu: Story = {
  render: (args) => <HorizontalButton {...args} />,
  args: {
    label: 'VER EL MENÚ',
    href: configData.globalLinks.menu,
    linkRender: (props) => <CustomLink {...props} />,
  },
};
export const Directions: Story = {
  render: (args) => <HorizontalButton {...args} />,
  args: {
    label: '¿CÓMO LLEGAR?',
    href: configData.globalLinks.googleMaps,
  },
};
