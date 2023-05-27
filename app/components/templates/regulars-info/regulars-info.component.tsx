import {Product} from '@shopify/hydrogen/storefront-api-types';
import parse from 'html-react-parser';
import {FC} from 'react';

import {
  InfoSection,
  Products,
  ProductsSection,
  SectionDividerContainer,
} from './regulars-info.styles';
import configData from '../../../config.json';
import useMediaQuery from '../../../hooks/use-media-query';
import {Divider} from '../../atoms/divider';
import {Paragraph} from '../../atoms/paragraph';
import {PromotionCard} from '../../molecules/promotion-card';
import {Subtitle} from '../../molecules/subtitle';
import {Carousel} from '../../organisms/carousel';

const {regularsDisclaimer} = configData;

interface Props {
  content: string;
  productsTitle?: MetafieldValue;
  products?: Product[];
}

export const RegularsInfo: FC<Props> = ({content, productsTitle, products}) => {
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
                />
              ))}
            </Products>
          ) : (
            <Carousel>
              {products.map((product) => (
                <PromotionCard
                  key={product.title}
                  image={product.featuredImage!.url}
                  label={product.title}
                  borderless
                  fullWidth
                />
              ))}
            </Carousel>
          )}
        </ProductsSection>
      )}
      <SectionDividerContainer>
        <Divider />
      </SectionDividerContainer>
      <Paragraph>
        <small>{regularsDisclaimer}</small>
      </Paragraph>
    </InfoSection>
  );
};
