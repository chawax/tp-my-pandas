import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import type { PandaDetailsProps } from '.';
import PandaDetails from '.';

export default {
  title: 'Components/PandaDetails',
  component: PandaDetails,
} as Meta;

const Template: Story<PandaDetailsProps> = (args) => <PandaDetails {...args} />;

export const WithNoInterests = Template.bind({});
WithNoInterests.args = {
  panda: {
    key: '1',
    name: 'Yuan Meng',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: [],
  },
};

export const WithInterests = Template.bind({});
WithInterests.args = {
  panda: {
    key: '1',
    name: 'Yuan Meng',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: ['yoga', 'bambou'],
  },
};
