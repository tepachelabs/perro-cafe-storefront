import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CarouselCircle} from './carousel-circle.component';

export default {
  title: 'Atoms/CarouselCircle',
  component: CarouselCircle,
} as ComponentMeta<typeof CarouselCircle>;

const Template: ComponentStory<typeof CarouselCircle> = (args) => (
  <CarouselCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
