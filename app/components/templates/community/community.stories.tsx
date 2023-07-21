import {Meta, StoryObj} from '@storybook/react';

import {Community} from './community.component';
import configData from '../../../config.json';

export default {
  title: 'Templates/Community',
  component: Community,
} as Meta<typeof Community>;

type Story = StoryObj<typeof Community>;

export const Default: Story = {
  render: (args) => <Community {...args} />,
  args: {reviews: configData.reviews},
};
