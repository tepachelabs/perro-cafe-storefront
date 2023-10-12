import {Meta, StoryObj} from '@storybook/react';

import {NavBar} from './navbar.component';
import configData from '../../../config.json';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
} as Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  render: (args) => <NavBar {...args} />,
  args: {
    links: configData.navbar.links.map((link, index) => ({
      label: link.label,
      href: link.link,
      active: index === 0,
    })),
    linkRender: (props) => <CustomLink {...props} />,
  },
};
