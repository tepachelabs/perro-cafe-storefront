import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CarouselCircle} from './CarouselCircle.component';

export default {
  title: 'Atoms/CarouselCircle',
  component: CarouselCircle,
} as ComponentMeta<typeof CarouselCircle>;

const Template: ComponentStory<typeof CarouselCircle> = (args) => (
  <CarouselCircle {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  variant: 'normal',
};

export const Selected = Template.bind({});
Selected.args = {
  variant: 'selected',
};
