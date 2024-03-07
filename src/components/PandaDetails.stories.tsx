import { Meta, StoryObj } from '@storybook/react';
import PandaDetails from './PandaDetails';

const meta = {
  title: 'Components/PandaDetails',
  component: PandaDetails,
} satisfies Meta<typeof PandaDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNoInterests: Story = {
  args: {
    panda: {
      id: '1',
      name: 'Yuan Meng',
      image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
      interests: [],
    },
  },
};

export const WithInterests: Story = {
  args: {
    panda: {
      id: '1',
      name: 'Yuan Meng',
      image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
      interests: ['yoga', 'bambou'],
    },
  },
};
