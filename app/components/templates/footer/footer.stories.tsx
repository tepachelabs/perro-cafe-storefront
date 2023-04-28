import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Footer} from './footer.component';

export default {
  title: 'Templates/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
