import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'reactstrap';

const meta = {
  title: 'Reactstrap/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
  },
};
