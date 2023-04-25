import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NavBar, NavBarLink} from './navbar.component';
import configData from '../../../config.json';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: configData.navbar.links.map((link, index) => ({
    label: link.label,
    href: link.link,
    active: index === 0,
  })),
  linkRender: (props) => <NavBarLink {...props} />,
};
