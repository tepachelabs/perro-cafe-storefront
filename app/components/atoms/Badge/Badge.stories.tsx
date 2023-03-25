import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Badge} from './Badge.component';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Seasonal = Template.bind({});
Seasonal.args = {
  variant: 'seasonal',
};

export const Recommendation = Template.bind({});
Recommendation.args = {
  variant: 'recommendation',
};
