import {StoryObj, Meta} from '@storybook/react';

import {MapSketch} from './map-sketch.component';

export default {
  title: 'Atoms/MapSketch',
  component: MapSketch,
} as Meta<typeof MapSketch>;

type Story = StoryObj<typeof MapSketch>;

export const Default: Story = {render: () => <MapSketch />};
