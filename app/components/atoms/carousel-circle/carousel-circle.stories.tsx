import {Meta, StoryObj} from '@storybook/react';

import {CarouselCircle} from './carousel-circle.component';

export default {
  title: 'Atoms/CarouselCircle',
  component: CarouselCircle,
} as Meta<typeof CarouselCircle>;

type Story = StoryObj<typeof CarouselCircle>;

export const Default: Story = {
  render: (args) => <CarouselCircle {...args} />,
  args: {active: false},
};

export const Active: Story = {
  render: (args) => <CarouselCircle {...args} />,
  args: {active: true},
};
