import {Meta, StoryObj} from '@storybook/react';

import {Menu} from './menu.component';

export default {
  title: 'Templates/Menu',
  component: Menu,
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: (args) => <Menu {...args} />,
  args: {
    products: [
      {
        src: 'https://placehold.co/220x220.png',
        alt: 'Producto 1',
        height: 220,
        width: 220,
      },
      {
        src: 'https://placehold.co/220x220.png',
        alt: 'Producto 2',
        height: 220,
        width: 220,
      },
      {
        src: 'https://placehold.co/220x220.png',
        alt: 'Producto 3',
        height: 220,
        width: 220,
      },
      {
        src: 'https://placehold.co/220x220.png',
        alt: 'Producto 4',
        height: 220,
        width: 220,
      },
    ],
  },
};
