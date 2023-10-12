import {StoryObj, Meta} from '@storybook/react';

import {LandingSkeleton} from './landing-skeleton.component';

export default {
  title: 'Templates/Skeletons/Landing',
  component: LandingSkeleton,
} as Meta<typeof LandingSkeleton>;

type Story = StoryObj<typeof LandingSkeleton>;

export const Default: Story = {
  render: (args) => <LandingSkeleton {...args} />,
  args: {
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
  },
};
