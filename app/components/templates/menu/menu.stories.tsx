import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Menu} from './menu.component';

export default {
  title: 'Templates/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      src: 'http://placehold.co/220x220.png',
      alt: 'Producto 1',
      height: 220,
      width: 220,
    },
    {
      src: 'http://placehold.co/220x220.png',
      alt: 'Producto 2',
      height: 220,
      width: 220,
    },
    {
      src: 'http://placehold.co/220x220.png',
      alt: 'Producto 3',
      height: 220,
      width: 220,
    },
    {
      src: 'http://placehold.co/220x220.png',
      alt: 'Producto 4',
      height: 220,
      width: 220,
    },
  ],
};
