import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PromotionCard} from './promotion-card.component';

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
  promoImageUrl: 'https://placehold.co/600x800.png',
  label: 'Latte pilonsillo',
};

export const Recommendation = Template.bind({});
Recommendation.args = {
  variant: 'recommendation',
  promoImageUrl: 'https://placehold.co/400x800.png',
  label: 'Latte pilonsillo',
};

export const Seasonal = Template.bind({});
Seasonal.args = {
  variant: 'seasonal',
  promoImageUrl: 'https://placehold.co/220x200.png',
  label: 'Latte pilonsillo',
};
