import {ComponentMeta, ComponentStory} from '@storybook/react';

import {HorizontalButton} from './HorizontalButton.component';

export default {
  title: 'Atoms/HorizontalButton',
  component: HorizontalButton,
} as ComponentMeta<typeof HorizontalButton>;

const Template: ComponentStory<typeof HorizontalButton> = (args) => (
  <HorizontalButton {...args} />
);

export const SeeMenu = Template.bind({});
SeeMenu.args = {
  content: 'VER EL MENÚ',
};

export const Directions = Template.bind({});
Directions.args = {
  content: '¿CÓMO LLEGAR?',
};
