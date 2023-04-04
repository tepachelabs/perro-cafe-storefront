import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Carousel} from './carousel.component';

export default {
  title: 'Orgamisms/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://placehold.co/540x280.png',
    'https://placehold.co/550x290.png',
    'https://placehold.co/560x270.png',
    'https://placehold.co/530x310.png',
    'https://placehold.co/580x320.png',
    'https://placehold.co/610x330.png',
  ],
};
