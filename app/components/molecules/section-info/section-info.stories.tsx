import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
  InternetInfo,
  GamesInfo,
  EventsInfo,
  IngredientsInfo,
} from './section-info.component';

export default {
  title: 'Molecules/SectionInfo',
  component: InternetInfo,
} as ComponentMeta<typeof InternetInfo>;

const Template: ComponentStory<typeof InternetInfo> = () => (
  <>
    <InternetInfo />
    <GamesInfo />
    <IngredientsInfo />
    <EventsInfo />
  </>
);

export const Default = Template.bind({});
