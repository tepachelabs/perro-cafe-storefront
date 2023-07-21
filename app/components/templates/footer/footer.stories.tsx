import {Meta, StoryObj} from '@storybook/react';

import {Footer} from './footer.component';

export default {
  title: 'Templates/Footer',
  component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {render: () => <Footer />};
