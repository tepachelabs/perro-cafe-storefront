import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

import {ReviewCard} from './review-card.component';

export default {
  title: 'Atoms/ReviewCard',
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <div style={{width: 420}}>
    <ReviewCard {...args} />
  </div>
);

export const Green = Template.bind({});
Green.args = {
  author: 'AngelMayer',
  review: 'Muy rico y saludable, me gustó la opción vegana.',
  variant: 'green',
};

export const Orange = Template.bind({});
Orange.args = {
  author: 'AngelMayer',
  review: 'Muy rico y saludable, me gustó la opción vegana.',
  variant: 'orange',
};

export const Yellow = Template.bind({});
Yellow.args = {
  author: 'AngelMayer',
  review: 'Muy rico y saludable, me gustó la opción vegana.',
  variant: 'yellow',
};
