import {ComponentStory, ComponentMeta} from '@storybook/react';

import {MapSketch} from './map-sketch.component';

export default {
  title: 'Atoms/MapSketch',
  component: MapSketch,
} as ComponentMeta<typeof MapSketch>;

const Template: ComponentStory<typeof MapSketch> = () => <MapSketch />;

export const Default = Template.bind({});
