import { Meta, StoryObj } from '@storybook/react';
import { DisplayModeProvider } from '../context/DisplayModeProvider';
import Header from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <DisplayModeProvider>
        <Story />
      </DisplayModeProvider>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
