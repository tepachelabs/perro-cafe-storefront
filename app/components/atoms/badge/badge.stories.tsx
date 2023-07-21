import {Meta, StoryObj} from '@storybook/react';

import {Badge} from './badge.component';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Seasonal: Story = {
  render: (args) => <Badge {...args} />,
  args: {variant: 'seasonal'},
};
export const Recommendation: Story = {
  render: (args) => <Badge {...args} />,
  args: {variant: 'recommendation'},
};
