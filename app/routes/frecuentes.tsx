import {Link} from '@remix-run/react';

import {NavBar, NavBarLink} from '~/components/organisms/navbar';
import {RegularsHero} from '~/components/organisms/regulars-hero/regulars-hero.component';
import {Footer} from '~/components/templates/footer';
import configData from '~/config.json';

// @ts-ignore
const _Link = (props) => <NavBarLink {...props} as={Link} />;

export default function Frecuentes() {
  const links = configData.navbar.links.map((link) => ({
    label: link.label,
    href: link.link,
    ...(link.label === 'Frecuentes' && {active: 'true'}),
  }));

  return (
    <>
      <NavBar links={links} linkRender={_Link} />
      <RegularsHero />
      <Footer />
    </>
  );
}
