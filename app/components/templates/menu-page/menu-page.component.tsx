import React, {FC, Fragment, ReactElement, useState} from 'react';

import menuPageOne from './img/menu-page-1.svg';
import menuPageTwo from './img/menu-page-2.svg';
import {
  CollapsibleTrigger,
  CollectionSection,
  CollapsibleContent,
  Img,
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

interface CollapsibleProps {
  trigger: (isContentOpen: boolean) => ReactElement;
  children: ReactElement;
}

export const MenuPage: FC<Props> = ({collections}) => (
  <MenuPageContainer>
    <Subtitle>El menú</Subtitle>

    <Paragraph>
      Las bebidas de temporada no se incluyen, ¡pregunta por ellas en barra!.
      Convierte cualquier bebida en fría por $10 pesos más.
    </Paragraph>

    <Img src={menuPageOne} alt="Imagen del menu, pagina 1" />

    <Divider />

    <Img src={menuPageTwo} alt="Imagen del menu, pagina 2" />

    <Divider />

    <Collapsible
      trigger={(isContentOpen) => (
        <Paragraph noMargin>
          {isContentOpen ? 'Ocultar' : 'Ver'} menú completo
        </Paragraph>
      )}
    >
      <Fragment>
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
      </Fragment>
    </Collapsible>
  </MenuPageContainer>
);

const Collapsible: FC<CollapsibleProps> = ({children, trigger}) => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <Fragment>
      <CollapsibleTrigger
        type="button"
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        {trigger(isContentOpen)}
      </CollapsibleTrigger>

      <CollapsibleContent isOpen={isContentOpen}>{children}</CollapsibleContent>
    </Fragment>
  );
};

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
      <Paragraph noMargin>{title}</Paragraph>
      <Paragraph noMargin>{price}</Paragraph>
    </ListItem>
  );
};
