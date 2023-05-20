import {Link, useLoaderData} from '@remix-run/react';
import {
  Metaobject,
  MetaobjectField,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {RegularsHero} from '~/components/organisms/regulars-hero/regulars-hero.component';
import {Footer} from '~/components/templates/footer';
import {
  RegularsInfo,
  RegularsInfoBlock,
} from '~/components/templates/regulars-info';
import configData from '~/config.json';

type ReducedMetafield = Record<keyof RegularsInfoBlock, string | undefined>;

export async function loader({context: {storefront}}: LoaderArgs) {
  const {metaobjects} = await storefront.query<Array<Metaobject>>(
    METAOBJECTS_QUERY,
  );

  return json({metaobjects});
}

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Frecuentes() {
  const {
    metaobjects: {nodes: metaobjectNodes},
  } = useLoaderData<typeof loader>();

  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Frecuentes' && {active: 'true'}),
  }));

  const infoBlocks = (metaobjectNodes as Array<Metaobject>)
    .map<RegularsInfoBlock>((metaobject) => {
      const fields = metaobject.fields.reduce(
        (result: ReducedMetafield, {key, value}) => {
          result[key as keyof RegularsInfoBlock] = value ?? '';

          return result;
        },
        {} as ReducedMetafield,
      );

      return fields;
    })
    .sort(({index: indexA}, {index: indexB}) => +indexA! - +indexB!);

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <RegularsHero />
      <RegularsInfo infoBlocks={infoBlocks} />
      <Footer />
    </>
  );
}

const METAOBJECTS_QUERY = `#graphql
  query MetaObjects {
    metaobjects(first: 4, type: "regulars_info") {
      nodes {
        id,
        type,
        fields {
          key,
          value
        }
      }
    }
  }
`;
