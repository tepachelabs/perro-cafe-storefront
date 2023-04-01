import {ComponentStory, ComponentMeta} from '@storybook/react';

import {LandingSkeleton} from './landing-skeleton.component';

export default {
  title: 'Atoms/Skeletons/Landing',
  component: LandingSkeleton,
} as ComponentMeta<typeof LandingSkeleton>;

const Template: ComponentStory<typeof LandingSkeleton> = (args) => (
  <LandingSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      src: 'https://placehold.co/100x100.png',
      alt: 'Image 1',
      width: 100,
      height: 100,
    },
    {
      src: 'https://placehold.co/100x100.png',
      alt: 'Image 2',
      width: 100,
      height: 100,
    },
    {
      src: 'https://placehold.co/100x100.png',
      alt: 'Image 3',
      width: 100,
      height: 100,
    },
    {
      src: 'https://placehold.co/100x100.png',
      alt: 'Image 4',
      width: 100,
      height: 100,
    },
  ],
};
