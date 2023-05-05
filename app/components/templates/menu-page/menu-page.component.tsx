import {
  Collection,
  Product,
  ProductPriceRange,
} from '@shopify/hydrogen/storefront-api-types';
import {FC} from 'react';

import {
  CollectionSection,
  Img,
  MenuPageContainer,
  Product as ProductFrame,
  ProductsGrid,
} from './menu-page.styles';
import {Hr} from '../../atoms/hr';
import {Paragraph} from '../../atoms/paragraph';
import {Subtitle} from '../../molecules/subtitle';

interface Props {
  collections: Array<Collection>;
}

interface ProductProps {
  title: string;
  src?: string;
  priceRange: ProductPriceRange;
}

export const MenuPage: FC<Props> = ({collections}) => {
  return (
    <MenuPageContainer>
      {collections.map((collection) => {
        return (
          <CollectionSection key={collection.id}>
            <Subtitle>{collection.title}</Subtitle>
            <ProductsGrid>
              {collection.products.nodes.map((product) => {
                const productImage =
                  product.images.nodes.length > 0
                    ? product.images.nodes[0].url
                    : undefined;

                return (
                  <ProductItem
                    key={product.id}
                    title={product.title}
                    src={productImage}
                    priceRange={product.priceRange}
                  />
                );
              })}
            </ProductsGrid>
            <Hr />
          </CollectionSection>
        );
      })}
    </MenuPageContainer>
  );
};

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
