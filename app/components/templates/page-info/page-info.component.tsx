import {Metafield, Product} from '@shopify/hydrogen/storefront-api-types';
import parse from 'html-react-parser';
import {FC} from 'react';

import {
  CarouselContainer,
  InfoSection,
  Products,
  ProductsSection,
  SectionDividerContainer,
} from './page-info.styles';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {Divider} from '../../atoms/divider';
import {LinkRender} from '../../atoms/link';
import {Paragraph} from '../../atoms/paragraph';
import {PromotionCard} from '../../molecules/promotion-card';
import {Subtitle} from '../../molecules/subtitle';
import {Carousel} from '../../organisms/carousel';

const {disclaimer} = configData;

type MetafieldValue = Pick<Metafield, 'value'>;

interface Props {
  content: string;
  productsTitle?: MetafieldValue;
  products?: Product[];
  linkRender: LinkRender;
}

export const PageInfo: FC<Props> = ({
  content,
  productsTitle,
  products,
  linkRender: _Link,
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <InfoSection>
      {parse(content)}
      {products && (
        <ProductsSection>
          {productsTitle && <Subtitle>{productsTitle.value}</Subtitle>}
          {isDesktop ? (
            <Products>
              {products.map((product) => (
                <PromotionCard
                  key={product.title}
                  image={product.featuredImage!.url}
                  label={product.title}
                  storeUrl={product.onlineStoreUrl || undefined}
                  linkRender={_Link}
                />
              ))}
            </Products>
          ) : (
            <CarouselContainer>
              <Carousel>
                {products.map((product) => (
                  <PromotionCard
                    key={product.title}
                    image={product.featuredImage!.url}
                    label={product.title}
                    storeUrl={product.onlineStoreUrl || undefined}
                    linkRender={_Link}
                    borderless
                    fullWidth
                  />
                ))}
              </Carousel>
            </CarouselContainer>
          )}
        </ProductsSection>
      )}
      <SectionDividerContainer>
        <Divider />
      </SectionDividerContainer>
      <Paragraph>
        <small>{disclaimer}</small>
      </Paragraph>
    </InfoSection>
  );
};
