import {StoryObj, Meta} from '@storybook/react';

import {ReviewCard} from './review-card.component';

export default {
  title: 'Atoms/ReviewCard',
  component: ReviewCard,
} as Meta<typeof ReviewCard>;

type Story = StoryObj<typeof ReviewCard>;

export const Green: Story = {
  render: (args) => (
    <div style={{maxWidth: '420px'}}>
      <ReviewCard {...args} />
    </div>
  ),
  args: {
    author: 'AngelMayer',
    review: 'Muy rico y saludable, me gustó la opción vegana.',
    variant: 'green',
  },
};

export const Orange: Story = {
  render: (args) => (
    <div style={{maxWidth: '420px'}}>
      <ReviewCard {...args} />
    </div>
  ),
  args: {
    author: 'AngelMayer',
    review: 'Muy rico y saludable, me gustó la opción vegana.',
    variant: 'orange',
  },
};

export const Yellow: Story = {
  render: (args) => (
    <div style={{maxWidth: '420px'}}>
      <ReviewCard {...args} />
    </div>
  ),
  args: {
    author: 'AngelMayer',
    review: 'Muy rico y saludable, me gustó la opción vegana.',
    variant: 'yellow',
  },
};
