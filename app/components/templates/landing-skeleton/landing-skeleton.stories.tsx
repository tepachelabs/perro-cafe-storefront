import {ComponentStory, ComponentMeta} from '@storybook/react';

import {LandingSkeleton} from './landing-skeleton.component';

export default {
  title: 'Atoms/Skeletons/Landing',
  component: LandingSkeleton,
} as ComponentMeta<typeof LandingSkeleton>;

const Template: ComponentStory<typeof LandingSkeleton> = (args) => (
  <LandingSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
