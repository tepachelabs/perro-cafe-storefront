import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
import { PerkInfo } from './perk-info.component';
import { Paragraph } from '../../atoms/paragraph/paragraph.component';

export default {
  title: 'Molecules/PerkInfo',
  component: PerkInfo,
} as ComponentMeta<typeof PerkInfo>;

const Template : ComponentStory<typeof PerkInfo> = (args) => (
  <PerkInfo icon={args.icon}>
      {args.children}
    </PerkInfo>
)

export const Games = Template.bind({})
Games.args = {
  icon: 'games',
  children: <Paragraph bold>Juegos de mesa</Paragraph>
}

export const Events = Template.bind({})
Events.args = {
  icon: 'events',
  children: <Paragraph bold>Hosteo de eventos</Paragraph>
}

export const Ingredients = Template.bind({})
Ingredients.args = {
  icon: 'ingredients',
  children: <Paragraph bold>Ingredientes 100% naturales</Paragraph>
}

export const Internet = Template.bind({})
Internet.args = {
  icon: 'internet',
  children: <Paragraph bold>Internet Rápido</Paragraph>
}

export const IconLess = Template.bind({})
IconLess.args = {
  children: <Paragraph>Este es un texto sin icono.</Paragraph>
}