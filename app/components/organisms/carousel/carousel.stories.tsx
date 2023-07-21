import {Meta, StoryObj} from '@storybook/react';

import {Carousel} from './carousel.component';
import {CustomLink} from '../../atoms/link';
import {PromotionCard} from '../../molecules/promotion-card';

export default {
  title: 'Organisms/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <div style={{maxWidth: 540}}>
      <Carousel>
        <img
          key="1"
          src="https://placehold.co/540x280.png"
          alt="Placeholder 1"
        />
        <img
          key="2"
          src="https://placehold.co/550x290.png"
          alt="Placeholder 2"
        />
        <img
          key="3"
          src="https://placehold.co/560x270.png"
          alt="Placeholder 3"
        />
        <img
          key="4"
          src="https://placehold.co/530x310.png"
          alt="Placeholder 4"
        />
        <img
          key="5"
          src="https://placehold.co/580x320.png"
          alt="Placeholder 5"
        />
        <img
          key="6"
          src="https://placehold.co/610x330.png"
          alt="Placeholder 6"
        />
      </Carousel>
    </div>
  ),
};

export const PromotionCards: Story = {
  render: () => (
    <div style={{maxWidth: 540}}>
      <Carousel>
        <PromotionCard
          key="1"
          image="https://placehold.co/400x400.png"
          label="Latte pilonsillo"
          fullWidth
          borderless
          linkRender={CustomLink}
        />
        <PromotionCard
          key="2"
          image="https://placehold.co/400x400.png"
          label="Latte macchiato"
          isRecommended
          fullWidth
          borderless
          linkRender={CustomLink}
        />
        <PromotionCard
          key="3"
          image="https://placehold.co/400x400.png"
          label="Latte vainilla"
          isSeasonal
          fullWidth
          borderless
          linkRender={CustomLink}
        />
        <PromotionCard
          key="4"
          image="https://placehold.co/400x400.png"
          label="Latte mocha"
          fullWidth
          borderless
          linkRender={CustomLink}
        />
        <PromotionCard
          key="5"
          image="https://placehold.co/400x400.png"
          label="Latte caramelo"
          isRecommended
          fullWidth
          borderless
          linkRender={CustomLink}
        />
        <PromotionCard
          key="6"
          image="https://placehold.co/400x400.png"
          label="Latte avellana"
          isSeasonal
          fullWidth
          borderless
          linkRender={CustomLink}
        />
      </Carousel>
    </div>
  ),
};
