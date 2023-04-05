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
  image: 'https://placehold.co/600x800.png',
  label: 'Latte pilonsillo',
};

export const IsRecommended = Template.bind({});
IsRecommended.args = {
  ...Default.args,
  isRecommended: true,
};

export const IsSeasonal = Template.bind({});
IsSeasonal.args = {
  ...Default.args,
  isSeasonal: true,
};
