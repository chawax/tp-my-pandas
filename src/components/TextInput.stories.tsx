import { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPlaceHolder: Story = {
  args: {
    label: 'Nom',
    name: 'name',
    placeholder: 'Saisissez votre nom',
  },
};

export const Required: Story = {
  args: {
    label: 'Nom',
    name: 'name',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Nom',
    name: 'name',
    placeholder: 'Saisissez votre nom',
    required: true,
    error: 'Le nom est obligatoire',
  },
};

export const WithInitialValue: Story = {
  args: {
    label: 'Nom',
    name: 'name',
    placeholder: 'Saisissez votre nom',
    required: true,
    value: 'Dupont',
  },
};
