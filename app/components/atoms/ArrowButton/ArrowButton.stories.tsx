import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArrowButton} from './ArrowButton.component';

export default {
  title: 'Atoms/ArrowButton',
  component: ArrowButton,
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);

export const Right = Template.bind({});
Right.args = {
  variant: 'right',
};

export const Left = Template.bind({});
Left.args = {
  variant: 'left',
};
