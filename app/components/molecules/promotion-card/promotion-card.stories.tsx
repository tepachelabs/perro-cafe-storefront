import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PromotionCard} from './promotion-card.component';

import placeholder from './img/placeholder.png';

export default {
  title: 'Molecules/PromotionCard',
  component: PromotionCard,
} as ComponentMeta<typeof PromotionCard>;

const Template: ComponentStory<typeof PromotionCard> = (args) => (
  <PromotionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  bgImage: placeholder,
  label: 'Latte pilonsillo',
};

export const Recommendation = Template.bind({});
Recommendation.args = {
  variant: 'recommendation',
  bgImage: placeholder,
  label: 'Latte pilonsillo',
};

export const Seasonal = Template.bind({});
Seasonal.args = {
  variant: 'seasonal',
  bgImage: placeholder,
  label: 'Latte pilonsillo',
};
