import {ComponentMeta, ComponentStory} from '@storybook/react';

import {HorizontalButton} from './HorizontalButton.component';

export default {
  title: 'Atoms/HorizontalButton',
  component: HorizontalButton,
} as ComponentMeta<typeof HorizontalButton>;

const Template: ComponentStory<typeof HorizontalButton> = (args) => (
  <HorizontalButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'VER EL MENÚ',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: '¿CÓMO LLEGAR?',
};
