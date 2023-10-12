import {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../app/components/**/*.stories.mdx',
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {fastRefresh: true},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
