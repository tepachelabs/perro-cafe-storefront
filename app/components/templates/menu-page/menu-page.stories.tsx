import {ComponentMeta, ComponentStory} from '@storybook/react';

import {MenuCollection, MenuPage, MenuProduct} from './menu-page.component';

export default {
  title: 'Templates/MenuPage',
  component: MenuPage,
} as ComponentMeta<typeof MenuPage>;

const Template: ComponentStory<typeof MenuPage> = (args) => (
  <MenuPage {...args} />
);

const placeholderImage = 'https://placehold.co/400x400.png';
const placeholderPrice = {amount: '35.0', currencyCode: 'MXN'};
const products: Array<MenuProduct> = [
  {
    id: 'prod_1',
    title: 'Product 1',
    src: placeholderImage,
    priceRange: {
      minVariantPrice: placeholderPrice,
      maxVariantPrice: placeholderPrice,
    },
  },
  {
    id: 'prod_2',
    title: 'Product 2',
    src: placeholderImage,
    priceRange: {
      minVariantPrice: placeholderPrice,
      maxVariantPrice: {...placeholderPrice, amount: '45.0'},
    },
  },
  {
    id: 'prod_3',
    title: 'Product 3',
    src: placeholderImage,
    priceRange: {
      minVariantPrice: placeholderPrice,
      maxVariantPrice: placeholderPrice,
    },
  },
  {
    id: 'prod_4',
    title: 'Product 4',
    src: placeholderImage,
    priceRange: {
      minVariantPrice: placeholderPrice,
      maxVariantPrice: {...placeholderPrice, amount: '55.0'},
    },
  },
];

const collections: Array<MenuCollection> = [
  {id: 'collection_1', title: 'Primera colección', products},
  {id: 'collection_2', title: 'Segunda colección', products},
  {id: 'collection_3', title: 'Tercera colección', products},
  {id: 'collection_4', title: 'Cuarta colección', products},
];

export const Default = Template.bind({});
Default.args = {
  collections,
};
