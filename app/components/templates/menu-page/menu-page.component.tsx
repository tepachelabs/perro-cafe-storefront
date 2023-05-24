import {FC} from 'react';

import {
  CollectionSection,
  List,
  ListItem,
  MenuPageContainer,
} from './menu-page.styles';
import {Divider} from '../../atoms/divider';
import {Paragraph} from '../../atoms/paragraph';
import {Subtitle} from '../../molecules/subtitle';

export interface MenuProductPriceRange {
  minVariantPrice: {amount: string; currencyCode: string};
  maxVariantPrice: {amount: string; currencyCode: string};
}

export interface MenuProduct {
  id: string;
  title: string;
  src?: string;
  priceRange: MenuProductPriceRange;
}

export interface MenuCollection {
  id: string;
  title: string;
  products: Array<MenuProduct>;
}

interface Props {
  collections: Array<MenuCollection>;
}

interface ProductProps {
  title: string;
  src?: string;
  priceRange: MenuProductPriceRange;
}

export const MenuPage: FC<Props> = ({collections}) => (
  <MenuPageContainer>
    {collections.map((collection) => (
      <CollectionSection key={collection.id}>
        <Subtitle>{collection.title}</Subtitle>
        <List>
          {collection.products
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((product) => (
              <ProductItem
                key={product.id}
                title={product.title}
                src={product.src}
                priceRange={product.priceRange}
              />
            ))}
        </List>
      </CollectionSection>
    ))}
    <Divider />
  </MenuPageContainer>
);

const ProductItem: FC<ProductProps> = ({title, priceRange}) => {
  const {
    minVariantPrice: {amount: minPrice},
    maxVariantPrice: {amount: maxPrice},
  } = priceRange;

  const isActualRange = minPrice !== maxPrice;

  const price = isActualRange
    ? `${Number(minPrice)} - ${Number(maxPrice)} `
    : `${Number(maxPrice)}`;

  return (
    <ListItem>
      <Paragraph>{title}</Paragraph>
      <Paragraph>{price}</Paragraph>
    </ListItem>
  );
};
