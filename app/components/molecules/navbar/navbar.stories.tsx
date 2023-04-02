import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Navbar, NavBarLink} from './navbar.component';

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    'Inicio',
    'Menú',
    'Frecuentes',
    'Tienda',
    'Contacto',
    'Facturación',
  ].map((label, index) => ({
    label,
    href: '/',
    ...(index === 0 && {active: 'true'}),
  })),
  linkRender: (props) => <NavBarLink {...props} />,
};
