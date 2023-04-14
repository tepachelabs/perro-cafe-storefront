import {ComponentMeta, ComponentStory} from '@storybook/react';

import {TitleSection} from './title-section.component';

export default {
  title: 'Molecules/TitleSection',
} as ComponentMeta<typeof TitleSection>;

const Template: ComponentStory<typeof TitleSection> = (args) => (
  <TitleSection {...args} />
);

export const MenuSection = Template.bind({});
MenuSection.args = {
  icon: 'menu',
  children: 'el menú',
};

export const CultSection = Template.bind({});
CultSection.args = {
  icon: 'cult',
  children: 'el culto',
};

export const TempleSection = Template.bind({});
TempleSection.args = {
  icon: 'temple',
  children: 'el templo',
};

export const CommunityTemple = Template.bind({});
CommunityTemple.args = {
  icon: 'temple',
  children: 'comunidad',
};
