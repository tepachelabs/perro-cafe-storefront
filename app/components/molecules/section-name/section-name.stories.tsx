import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Menu, Cult, Temple, Community} from './section-name.component';

export default {
  title: 'Molecules/SectionName',
} as ComponentMeta<
  typeof Menu | typeof Cult | typeof Temple | typeof Community
>;

const MenuTemplate: ComponentStory<typeof Menu> = () => <Menu />;

const CultTemplate: ComponentStory<typeof Cult> = () => <Cult />;

const TempleTemplate: ComponentStory<typeof Temple> = () => <Temple />;

const CommunityTemplate: ComponentStory<typeof Community> = () => <Community />;

export const MenuSection = MenuTemplate.bind({});
export const CultSection = CultTemplate.bind({});
export const TempleSection = TempleTemplate.bind({});
export const CommunitySection = CommunityTemplate.bind({});
