import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

import {Map} from './map.component';

export default {
  title: 'Atoms/Map',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = () => <Map />;

export const Default = Template.bind({});
