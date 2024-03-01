import {Metafield, Product} from '@shopify/hydrogen/storefront-api-types';
import parse, {domToReact, HTMLReactParserOptions} from 'html-react-parser';
import {FC} from 'react';

import {
  CarouselContainer,
  InfoSection,
  Products,
  ProductsSection,
  SectionDividerContainer,
} from './page-info.styles';
import useMediaQuery from '../../../hooks/use-media-query';
import {Divider} from '../../atoms/divider';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '../../atoms/heading';
import {HorizontalButton} from '../../atoms/horizontal-button';
import {LinkRender} from '../../atoms/link';
import {List, ListItem, OrderedList} from '../../atoms/list';
import {Paragraph} from '../../atoms/paragraph';
import {PromotionCard} from '../../molecules/promotion-card';
import {Subtitle} from '../../molecules/subtitle';
import {Carousel} from '../../organisms/carousel';

type MetafieldValue = Pick<Metafield, 'value'>;

interface Props {
  content: string;
  productsTitle?: MetafieldValue;
  products?: Product[];
  linkRender: LinkRender;
}

const config = (Link: any) =>
  ({
    // @ts-ignore
    replace: ({name, children, ...rest}: DOMNode) => {
      if (name === 'h1') {
        return <Heading1>{domToReact(children, config(Link))}</Heading1>;
      }

      if (name === 'h2') {
        return <Heading2>{domToReact(children, config(Link))}</Heading2>;
      }

      if (name === 'h3') {
        return <Heading3>{domToReact(children, config(Link))}</Heading3>;
      }

      if (name === 'h4') {
        return <Heading4>{domToReact(children, config(Link))}</Heading4>;
      }

      if (name === 'h5') {
        return <Heading5>{domToReact(children, config(Link))}</Heading5>;
      }

      if (name === 'h6') {
        return <Heading6>{domToReact(children, config(Link))}</Heading6>;
      }

      if (name === 'p') {
        return <Paragraph>{domToReact(children, config(Link))}</Paragraph>;
      }

      if (name === 'ul') {
        return <List>{domToReact(children, config(Link))}</List>;
      }

      if (name === 'ol') {
        return <OrderedList>{domToReact(children, config(Link))}</OrderedList>;
      }

      if (name === 'li') {
        if (children?.[0]?.type === 'text' && children?.[0]?.data !== '\\n') {
          return (
            <ListItem>
              <Paragraph noMargin>
                {domToReact(children, config(Link))}
              </Paragraph>
            </ListItem>
          );
        }
        return <ListItem>{domToReact(children, config(Link))}</ListItem>;
      }

      if (name === 'a') {
        if (rest?.attribs?.['class'] === 'button') {
          return (
            <>
              <HorizontalButton
                label={rest?.attribs?.title}
                href={rest?.attribs?.href}
                linkRender={Link}
              />
            </>
          );
        }
      }

      return null;
    },
  } as HTMLReactParserOptions);

export const PageInfo: FC<Props> = ({
  content,
  productsTitle,
  products,
  linkRender: _Link,
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <InfoSection>
      {parse(content, config(_Link))}

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
    </InfoSection>
  );
};
