import {ComponentMeta, ComponentStory} from '@storybook/react';

import {RegularsHero} from './regulars-hero.component';

export default {
  title: 'Organisms/RegularsHero',
  component: RegularsHero,
} as ComponentMeta<typeof RegularsHero>;

const Template: ComponentStory<typeof RegularsHero> = () => <RegularsHero />;

export const Default = Template.bind({});
