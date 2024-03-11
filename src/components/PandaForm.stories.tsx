import { Meta, StoryObj } from '@storybook/react';
import PandaForm from './PandaForm';

const meta = {
  title: 'Components/PandaForm',
  component: PandaForm,
} satisfies Meta<typeof PandaForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutInitialValues: Story = {
  args: {},
};

export const WithInitialValues: Story = {
  args: {
    initialValues: {
      name: 'Yuan Meng',
      image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
      interests: ['yoga', 'bambou'].join(','),
    },
  },
};
