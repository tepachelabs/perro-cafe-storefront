import {FC} from 'react';

import {
  CollectionSection,
  Img,
  MenuPageContainer,
  Product as ProductFrame,
  ProductsGrid,
} from './menu-page.styles';
import {Divider} from '../../atoms/divider';
import {Hr} from '../../atoms/hr';
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
    {collections.map((collection, index, array) => {
      const renderDivider = index < array.length - 1;

      return (
        <CollectionSection key={collection.id}>
          <Subtitle>{collection.title}</Subtitle>
          <ProductsGrid>
            {collection.products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  title={product.title}
                  src={product.src}
                  priceRange={product.priceRange}
                />
              );
            })}
          </ProductsGrid>
          {renderDivider && <Hr />}
        </CollectionSection>
      );
    })}
    <Divider />
  </MenuPageContainer>
);

const ProductItem: FC<ProductProps> = ({title, src, priceRange}) => {
  const {
    minVariantPrice: {amount: minPrice, currencyCode: minCurrency},
    maxVariantPrice: {amount: maxPrice, currencyCode: maxCurrency},
  } = priceRange;

  const isActualRange = minPrice !== maxPrice;

  const price = isActualRange
    ? `${minPrice}0 ${minCurrency} - ${maxPrice}0 ${maxCurrency}`
    : `${maxPrice}0 ${maxCurrency}`;

  return (
    <ProductFrame>
      <Img src={src || 'http://placehold.co/400x400.png'} alt={title} />
      <Paragraph bold>{title}</Paragraph>
      <Paragraph bold>{price}</Paragraph>
    </ProductFrame>
  );
};
