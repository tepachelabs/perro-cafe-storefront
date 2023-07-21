import {Meta, StoryObj} from '@storybook/react';

import {PromotionCard} from './promotion-card.component';
import {CustomLink} from '../../atoms/link';

export default {
  title: 'Molecules/PromotionCard',
  component: PromotionCard,
} as Meta<typeof PromotionCard>;

type Story = StoryObj<typeof PromotionCard>;

export const Default: Story = {
  render: (args) => (
    <div style={{width: '280px'}}>
      <PromotionCard {...args} />
    </div>
  ),
  args: {
    image: 'https://placehold.co/600x800.png',
    label: 'Latte pilonsillo',
    linkRender: (props) => <CustomLink {...props} />,
  },
};

export const IsRecommended: Story = {
  render: (args) => (
    <div style={{width: '280px'}}>
      <PromotionCard {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    isRecommended: true,
  },
};

export const IsSeasonal: Story = {
  render: (args) => (
    <div style={{width: '280px'}}>
      <PromotionCard {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    isSeasonal: true,
  },
};
