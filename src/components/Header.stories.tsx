import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import PandaDetails from './PandaDetails';

const meta = {
  title: 'Components/Header',
  component: Header,
} satisfies Meta<typeof PandaDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
