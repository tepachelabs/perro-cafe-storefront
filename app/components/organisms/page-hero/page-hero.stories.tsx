import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PageHero as PageHero} from './page-hero.component';

export default {
  title: 'Organisms/PageHero',
  component: PageHero,
} as ComponentMeta<typeof PageHero>;

const Template: ComponentStory<typeof PageHero> = () => <PageHero />;

export const Default = Template.bind({});
