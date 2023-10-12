import {Meta, StoryObj} from '@storybook/react';

import {Cult} from './cult.component';
import configData from '../../../config.json';

export default {
  title: 'Templates/Cult',
  component: Cult,
} as Meta<typeof Cult>;

type Story = StoryObj<typeof Cult>;

export const Default: Story = {
  render: (args) => <Cult {...args} />,
  args: {
    images: configData.cult.images,
    description:
      'Lorem ipsum dolor sit amet, conctetuer adipiscing elit volutpat. Hendrerit in vulputate velit esse. Ut wisi enim ad minim veniam.',
  },
};
