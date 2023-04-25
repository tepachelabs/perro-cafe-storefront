import {ComponentMeta, ComponentStory} from '@storybook/react';

import {HorizontalButton} from './horizontal-button.component';
import configData from '../../../config/config.json';

export default {
  title: 'Atoms/HorizontalButton',
  component: HorizontalButton,
} as ComponentMeta<typeof HorizontalButton>;

const Template: ComponentStory<typeof HorizontalButton> = (args) => (
  <HorizontalButton {...args} />
);

export const SeeMenu = Template.bind({});
SeeMenu.args = {
  label: 'VER EL MENÚ',
  href: configData.globalLinks.menu,
};

export const Directions = Template.bind({});
Directions.args = {
  label: '¿CÓMO LLEGAR?',
  href: configData.globalLinks.googleMaps,
};
